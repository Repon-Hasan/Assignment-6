
function RandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color =color + letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("theme-btn").addEventListener('click',()=>{
    // console.log("click me");
    const randomColor=RandomColor();
    document.body.style.backgroundColor=randomColor;
})