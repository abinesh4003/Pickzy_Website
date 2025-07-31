import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    
    const positions = await db.collection('positions').find({}).toArray();

    return new Response(JSON.stringify({ 
      success: true,
      data: positions 
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (e) {
    console.error('API Error:', e);
    return new Response(JSON.stringify({ 
      success: false,
      error: 'Failed to fetch positions',
      data: [] 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}