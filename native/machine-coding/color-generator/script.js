function generateGradient() {
    let colors = [];
    for (let i = 0; i < 2; i++) {
        colors.push(getRandomColor());
    }
    let gradient = "linear-gradient(to right, " + colors[0] + ", " + colors[1] + ")";
    document.querySelector('.gradient').style.background = gradient;
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function copyGradient() {
    let gradient = document.querySelector('.gradient').style.background;
    let tempInput = document.createElement("input");
    tempInput.value = gradient;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Gradient copied to clipboard: " + gradient);
}