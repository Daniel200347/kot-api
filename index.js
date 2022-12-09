document.getElementById(1).onclick = print;

async function print() {
    const response = await fetch("https://aws.random.cat/meow")
    const resultFetch = await response.json();
    document.getElementById("image").src = resultFetch.file;
}
print();
