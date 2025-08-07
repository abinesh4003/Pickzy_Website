import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export async function POST(request, { params }) {
  const { id } = params;

  try {
    // Validate position ID
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid position ID format' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();

    // Atomic update to increment applicant count
    const result = await db.collection('positions').findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $inc: { applicants: 1 } }, // Atomic increment
      { 
        returnDocument: 'after', // Return the updated document
        projection: { applicants: 1 } // Only return the applicants field
      }
    );

    if (!result.value) {
      return NextResponse.json(
        { error: 'Position not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      newApplicantCount: result.value.applicants
    });

  } catch (e) {
    console.error('Applicant Count Error:', e);
    return NextResponse.json(
      { error: 'Failed to update applicant count' }, 
      { status: 500 }
    );
  }
}