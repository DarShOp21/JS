let btn =  document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click", () => {
    let h2 = document.querySelector("h2");
    let randomColor = colorGenerator();
    
    h2.innerText = randomColor;
    div.style.backgroundColor = randomColor;
})

let colorGenerator = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r}, ${g}, ${b})`;
    return color
}
console.log(colorGenerator);