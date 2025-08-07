import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export async function POST(request, { params }) {
  const { id } = params;

  try {
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Invalid position ID' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    // Atomic update to increment view count
    const result = await db.collection('positions').findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $inc: { views: 1 } },
      { returnDocument: 'after' } // Return the updated document
    );

    if (!result.value) {
      return NextResponse.json({ error: 'Position not found' }, { status: 404 });
    }

    const { _id, ...rest } = result.value;
    return NextResponse.json({
      id: _id.toString(),
      ...rest,
    });

  } catch (e) {
    console.error('View Count Error:', e);
    return NextResponse.json(
      { error: 'Failed to update view count' }, 
      { status: 500 }
    );
  }
}