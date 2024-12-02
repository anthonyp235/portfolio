import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  
  if (!lat || !lon) {
    return NextResponse.json({ error: 'Latitude and longitude parameters are required' }, { status: 400 });
  }
  
  const apiKey = process.env.API_NINJAS_KEY;
  console.log('API Key:', apiKey); // Log the API key to check if it's loaded
  
  if (!apiKey) {
    console.error('API key is not set');
    return NextResponse.json({ error: 'API key is not configured' }, { status: 500 });
  }
  
  const apiUrl = `https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${lon}`;
  
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API responded with status ${response.status}. Error: ${errorText}`);
      throw new Error(`API responded with status ${response.status}. Error: ${errorText}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('Error fetching weather data:', error);
    
    // Type assertion to treat error as an Error object
    const errorMessage = (error as Error).message || 'Unknown error occurred';
    
    return NextResponse.json({ error: 'Failed to fetch weather data', details: errorMessage }, { status: 500 });
  }
}