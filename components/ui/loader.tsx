"use client";
import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

// Global updater function
let updateLoading = (_loading: boolean, _message?: string) => {};

export function GlobalLoader() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    updateLoading = (value: boolean, msg?: string) => {
      setLoading(value);
      if (msg) setMessage(msg);
    };
    return () => {
      updateLoading = () => {};
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg flex flex-col items-center shadow-lg">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <p className="mt-2 text-gray-700 text-sm">{message}</p>
      </div>
    </div>
  );
}

// Function to trigger loader
export function setGlobalLoading(value: boolean, message?: string) {
  updateLoading(value, message);
}
