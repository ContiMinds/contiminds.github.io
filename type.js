const elements = [
    { selector: '.heading', text: 'ContiMinds.', speed: 100 },
    { selector: '.slogan', text: 'Building Tomorrow, Brick By Brick.', speed: 10 },
];

function typeText(element, text, index = 0, speed) {
    if (index === 0) {
        element.textContent = '';
    }

    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(() => typeText(element, text, index, speed), speed);
    }
}

elements.forEach(item => {
    const element = document.querySelector(item.selector);
    typeText(element, item.text, 0, item.speed);
});
