// JavaScript Code
const counter = document.getElementById("counter");
async function updateCounter() {
    let response = await fetch("https://pkgycelmquxmmopq4zv3l3mvbu0attig.lambda-url.us-east-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = data;
}

updateCounter();
