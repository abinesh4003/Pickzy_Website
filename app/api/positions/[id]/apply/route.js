import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export async function PUT(request, { params }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'Valid position ID is required' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const collection = db.collection('careers');

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },   
      { $inc: { applicants: 1 } } // increment views field by 1
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Position not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      updatedCount: result.modifiedCount,
    });

  } catch (error) {
    console.error('Error updating views:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
