import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const domain = searchParams.get('domain');
  
  if (!domain) {
    return NextResponse.json({ error: 'Domain parameter is required' }, { status: 400 });
  }
  
  const apiKey = process.env.API_NINJAS_KEY;
  console.log('API Key:', apiKey); // Log the API key to check if it's loaded
  
  if (!apiKey) {
    console.error('API key is not set');
    return NextResponse.json({ error: 'API key is not configured' }, { status: 500 });
  }
  
  const apiUrl = `https://api.api-ninjas.com/v1/whois?domain=${encodeURIComponent(domain)}`;
  
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
    console.error('Error fetching WHOIS data:', error);
    
    // Type assertion to treat error as an Error object
    const errorMessage = (error as Error).message || 'Unknown error occurred';
    
    return NextResponse.json({ error: 'Failed to fetch WHOIS data', details: errorMessage }, { status: 500 });
  }
}