"use client";

import { useState, useRef, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, X, ChevronLeft, ChevronRight, Check, User, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { showToast } from './ui/toast';

const ScheduleCallButton = () => {
    // State management
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1); // 1: date, 2: time, 3: details, 4: confirmation
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phone: '',
        notes: ''
    });
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const modalRef = useRef(null);

    // Get current date and time
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Generate time slots based on current time for today, or all slots for future dates
    const generateTimeSlots = (date) => {
        const isToday = date && 
            date.getDate() === now.getDate() &&
            date.getMonth() === now.getMonth() &&
            date.getFullYear() === now.getFullYear();
        
        const baseSlots = [
            { time: '9:00 AM', duration: '60 min', type: 'Strategy Session' },
            { time: '10:00 AM', duration: '60 min', type: 'Consultation' },
            { time: '11:00 AM', duration: '60 min', type: 'Q&A' },
            { time: '12:00 PM', duration: '60 min', type: 'Deep Dive' },
            { time: '2:00 PM', duration: '60 min', type: 'Technical Review' },
            { time: '3:00 PM', duration: '60 min', type: 'Discovery Call' },
            { time: '4:00 PM', duration: '60 min', type: 'Planning Session' },
             { time: '5:00 PM', duration: '60 min', type: 'Planning Session' },
              { time: '6:00  PM', duration: '60 min', type: 'Planning Session' }

        ];
        
        if (!isToday) return baseSlots;
        
        // Filter out past time slots for today
        return baseSlots.filter(slot => {
            const [time, modifier] = slot.time.split(' ');
            let [hours, minutes] = time.split(':').map(Number);
            
            // Convert to 24-hour format
            if (modifier === 'PM' && hours !== 12) hours += 12;
            if (modifier === 'AM' && hours === 12) hours = 0;
            
            // Check if this time slot is in the future
            if (hours > currentHour) return true;
            if (hours === currentHour && minutes > currentMinute) return true;
            return false;
        });
    };

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Generate days for the current month view
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(currentYear, currentMonth, i);
        days.push(date);
    }

    // Check if a date is in the past
    const isPastDate = (date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    const handleDateSelect = (date) => {
        if (isPastDate(date)) return; // Don't allow selecting past dates
        setSelectedDate(date);
        setStep(2);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        setStep(3);
    };

    const closeModal = () => {
        setIsOpen(false);
        setTimeout(() => {
            setStep(1);
            setSelectedDate(null);
            setSelectedTime(null);
            setUserDetails({ name: '', email: '', phone: '', notes: '' });
            setIsSuccess(false);
        }, 300);
    };
    const validateConfig = (details) => {
       if(!details.name) {
            return false;
        }
        else if(details.email && !/\S+@\S+\.\S+/.test(details.email)) {
            return false;
        }
        else if(details.phone && !/^\+?\d{1,4}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(details.phone)) {
            return false;
        }
        else {
            return true;
        }
    };

    const handleSubmit = async () => {
        if(!validateConfig(userDetails)) {
            showToast("Error", "Please fill in all required fields.", "error");
            return;
        }
        setIsSubmitting(true);
        
        const response = await fetch('/api/schedule-call', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date: selectedDate,
                time: selectedTime,
                user: userDetails
            })
        });
        if (!response.ok) {
            showToast("Error", "Error scheduling appointment. Please try again.", "error");
            setIsSubmitting(false);
            setIsSuccess(false);
             setStep(1);
             return
        }
            
        setIsSubmitting(false);
        setIsSuccess(true);
        setStep(4);

        console.log('Appointment Details:', {
            date: selectedDate,
            time: selectedTime,
            user: userDetails
        });
    };


    const navigateMonth = (direction) => {
        setCurrentMonth(prev => {
            if (direction === 'prev') {
                const newMonth = prev === 0 ? 11 : prev - 1;
                if(currentYear<new Date().getFullYear() || (currentYear === new Date().getFullYear() && newMonth < new Date().getMonth())) {
                  
                    return prev;
                }           
                if (prev === 0) setCurrentYear(prevYear => prevYear - 1);
                return newMonth;
            } else {
                const newMonth = prev === 11 ? 0 : prev + 1;
                if (prev === 11) setCurrentYear(prevYear => prevYear + 1);
                return newMonth;
            }
        });
    };

    const monthName = new Date(currentYear, currentMonth).toLocaleString('default', {
        month: 'long',
        year: 'numeric'
    });

    return (
        <div className="text-center">
            <p className="text-sm text-gray-500 mt-10 font-semibold">Still have questions? </p>
            <Button
                className="schedule-call bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 
                hover:to-indigo-700 shadow hover:shadow-md transition-all 
                duration-200 px-4 pb-2 rounded-lg text-sm font-medium mt-4"
                onClick={() => setIsOpen(true)}
            >
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
                        <motion.div
                            ref={modalRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white rounded-lg shadow-xl w-full max-w-sm sm:max-w-md 
                            max-h-[95vh] overflow-hidden flex flex-col"
                        >
                            {/* Modal Header */}
                            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {step === 1 && 'Select Date'}
                                        {step === 2 && 'Select Time'}
                                        {step === 3 && 'Your Information'}
                                        {step === 4 && 'Booking Confirmed'}
                                    </h3>
                                    <p className="text-gray-500 text-xs mt-1">
                                        {step === 1 && 'Choose a date for your consultation'}
                                        {step === 2 && 'Available time slots for ' + selectedDate?.toLocaleDateString()}
                                        {step === 3 && 'We\'ll use this to confirm your appointment'}
                                        {step === 4 && 'Your session has been scheduled'}
                                    </p>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Progress Steps */}
                            <div className="px-4 py-2 border-b border-gray-100 bg-gray-50">
                                <div className="flex items-center justify-center">
                                    {[1, 2, 3, 4].map((stepNumber) => (
                                        <div key={stepNumber} className="flex items-center">
                                            <div className={`flex items-center justify-center w-6 h-6 rounded-full ${step >= stepNumber ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} font-medium text-xs`}>
                                                {stepNumber}
                                            </div>
                                            {stepNumber < 4 && (
                                                <div className={`w-8 h-0.5 mx-1 ${step > stepNumber ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="flex-1 overflow-auto p-4">
                                {step === 1 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <div className="flex justify-between items-center mb-4">
                                            <h4 className="font-medium flex items-center text-gray-700 text-sm">
                                                <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                                                Available Dates
                                            </h4>
                                            <div className="flex items-center space-x-1 bg-gray-50 rounded-md p-0.5">
                                                <button
                                                    onClick={() => navigateMonth('prev')}
                                                    className="p-1 rounded-md hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
                                                >
                                                    <ChevronLeft className="h-4 w-4" />
                                                </button>
                                                <span className="font-medium text-gray-700 px-1 min-w-[120px] text-center text-sm">
                                                    {monthName}
                                                </span>
                                                <button
                                                    onClick={() => navigateMonth('next')}
                                                    className="p-1 rounded-md hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
                                                >
                                                    <ChevronRight className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-7 gap-1 mb-2">
                                            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                                <div key={day} className="text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    {day}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="grid grid-cols-7 gap-1">
                                            {days.map((day, index) => {
                                                const isToday = day && day.getDate() === now.getDate() &&
                                                    day.getMonth() === now.getMonth() &&
                                                    day.getFullYear() === now.getFullYear();
                                                const isSelected = selectedDate && day && day.toDateString() === selectedDate.toDateString();
                                                const isPast = day && isPastDate(day);

                                                return (
                                                    <button
                                                        key={index}
                                                        onClick={() => day && !isPast && handleDateSelect(day)}
                                                        className={`aspect-square flex flex-col items-center justify-center rounded-md text-xs transition-all ${day && !isPast ? 'hover:bg-blue-50 cursor-pointer' : 'cursor-default'
                                                            } ${isSelected
                                                                ? 'bg-blue-600 text-white shadow-sm'
                                                                : isPast 
                                                                    ? 'text-gray-300 bg-gray-100' 
                                                                    : day ? 'text-gray-800' : 'text-gray-300'
                                                            } ${isToday && !isSelected && !isPast ? 'border border-blue-300' : ''
                                                            }`}
                                                        disabled={!day || isPast}
                                                    >
                                                        {day ? day.getDate() : ''}
                                                        {isToday && !isSelected && !isPast && (
                                                            <div className="w-1 h-1 rounded-full bg-blue-600 mt-0.5"></div>
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <div className="mb-4">
                                            <h4 className="font-medium flex items-center text-gray-700 mb-3 text-sm">
                                                <Clock className="h-4 w-4 mr-2 text-blue-600" />
                                                Available Time Slots
                                            </h4>
                                            <div className="space-y-2">
                                                {generateTimeSlots(selectedDate).length > 0 ? (
                                                    generateTimeSlots(selectedDate).map((slot) => (
                                                        <button
                                                            key={slot.time}
                                                            onClick={() => handleTimeSelect(slot)}
                                                            className={`w-full p-3 rounded-lg border transition-all text-left ${selectedTime?.time === slot.time
                                                                    ? 'border-blue-600 bg-blue-50 text-blue-600 shadow-sm'
                                                                    : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'
                                                                }`}
                                                        >
                                                            <div className="flex justify-between items-center">
                                                                <div>
                                                                    <div className="font-medium text-sm">{slot.time}</div>
                                                                  
                                                                </div>
                                                               
                                                            </div>
                                                        </button>
                                                    ))
                                                ) : (
                                                    <div className="text-center py-6 text-gray-500">
                                                        <Clock className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                                                        <p className="text-sm">No available time slots for this date</p>
                                                        <button 
                                                            onClick={() => setStep(1)}
                                                            className="text-blue-600 text-xs mt-2 hover:underline"
                                                        >
                                                            Choose another date
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="space-y-3"
                                    >
                                        <div className="bg-blue-50 p-3 rounded-md mb-4 text-sm">
                                            <div className="font-medium text-blue-800 mb-0.5">Your Session Details</div>
                                            <div className="text-gray-700">
                                                {selectedDate?.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} • {selectedTime?.time}
                                            </div>
                                            <div className="text-xs text-gray-500 mt-0.5">{selectedTime?.duration} {selectedTime?.type}</div>
                                        </div>

                                        <div className="space-y-3">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <User className="h-4 w-4 text-gray-400" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="pl-9 w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm py-2"
                                                        value={userDetails.name}
                                                        onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                                        placeholder="John Doe"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <Mail className="h-4 w-4 text-gray-400" />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        className="pl-9 w-full  rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm py-2"
                                                        value={userDetails.email}
                                                        onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                                        placeholder="you@example.com"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number</label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <Phone className="h-4 w-4 text-gray-400" />
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        className="pl-9 w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm py-2"
                                                        value={userDetails.phone}
                                                        onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                                                        placeholder="+1 (___) ___-____"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-xs font-medium text-gray-700 mb-1">Additional Notes (Optional)</label>
                                                <textarea
                                                    className="w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm py-2"
                                                    rows={2}
                                                    value={userDetails.notes}
                                                    onChange={(e) => setUserDetails({ ...userDetails, notes: e.target.value })}
                                                    placeholder="Anything we should know before our call?"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 4 && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex flex-col items-center justify-center py-6"
                                    >
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                            <Check className="h-8 w-8 text-green-600" strokeWidth={3} />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Confirmed!</h3>
                                        <p className="text-gray-600 text-center text-sm mb-4">
                                            Your {selectedTime?.type.toLowerCase()} has been scheduled for {selectedDate?.toLocaleDateString()} at {selectedTime?.time}.
                                        </p>
                                        <div className="bg-gray-50 p-3 rounded-md w-full text-sm">
                                            <div className="font-medium text-gray-700 mb-1">Appointment Details</div>
                                            <div className="space-y-1 text-gray-600">
                                                <div className="flex justify-between">
                                                    <span>Date:</span>
                                                    <span>{selectedDate?.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Time:</span>
                                                    <span>{selectedTime?.time} ({selectedTime?.duration})</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Type:</span>
                                                    <span>{selectedTime?.type}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-4 text-center">
                                            A confirmation has been sent to your email. We look forward to connecting with you!
                                        </p>
                                    </motion.div>
                                )}
                            </div>

                            {/* Footer with navigation */}
                            <div className="p-4 border-t border-gray-100 bg-gray-50">
                                <div className="flex justify-between">
                                    {step > 1 && step < 4 && (
                                        <button
                                            onClick={() => setStep(step - 1)}
                                            className="px-4 py-2 text-gray-600 hover:text-gray-800 rounded-md font-medium text-sm transition-colors"
                                        >
                                            Back
                                        </button>
                                    )}
                                    {step < 3 && (
                                        <div className="flex-1"></div>
                                    )}
                                    {step === 3 && (
                                        <button
                                            onClick={handleSubmit}
                                            disabled={isSubmitting}
                                            className={`ml-auto px-4 py-2 rounded-md font-medium text-sm transition-all 
                                                     bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-sm hover:shadow-md'
                                                    
                                                 ${isSubmitting ? 'opacity-80' : ''
                                                }`}>
                                        
                                            {isSubmitting ? 'Confirming...' : 'Confirm Appointment'}
                                        </button>
                                    )}
                                    {step === 4 && (
                                        <button
                                            onClick={closeModal}
                                            className="ml-auto px-4 py-2 bg-gray-800 text-white rounded-md font-medium text-sm hover:bg-gray-900 transition-colors"
                                        >
                                            Close
                                        </button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ScheduleCallButton;