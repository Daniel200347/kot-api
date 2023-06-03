document.getElementById(1).onclick = print;

async function print() {
    const url = `https://api.thecatapi.com/v1/images/search`;
    const api_key = "DEMO_API_KEY"

    const response = await fetch(url, {headers: {'x-api-key': api_key}})
    const resultFetch = await response.json();

    document.getElementById("image").src = resultFetch[0].url;

}

print();
