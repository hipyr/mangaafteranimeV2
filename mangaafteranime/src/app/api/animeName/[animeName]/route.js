export async function GET(request, { params }) {
    const animeName = params.animeName;
    const headers = {
        headers: {
            'Access-Control-Allow-Headers': 'X-Requested-With',
            'X-MAL-CLIENT-ID': 'b16380860b0a5e8b505de7e3742b85c1',
            'Content-Type': 'application/json',
        }
    }
    const response = await fetch(`https://api.myanimelist.net/v2/anime?q=${animeName}&limit=5`, headers);
    const parsedData = await response.json();

    return new Response(JSON.stringify(parsedData), {
        headers: { 'Content-Type': 'application/json' }
    });
}