const textArray = ['Front End Developer','Video Editor','Web Designer', 'Java Developer'];
let currentIndex = 0;
function updateText() {
    const textContainer = document.getElementById('text-container');
    const text = textArray[currentIndex];
    textContainer.innerHTML = '';
    text.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        textContainer.appendChild(span);
    });
    const spans = textContainer.querySelectorAll('span');
    spans.forEach((span, index) => {
        setTimeout(() => {
            span.classList.add('show');
        }, index * 50);
    });
    setTimeout(() => {
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.remove('show');
                span.classList.add('hide');
            }, index * 50);
        });
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % textArray.length;
            updateText();
        }, spans.length * 50 + 500); 
    }, text.length * 50 + 1500);
}
updateText();

const fillColorToSlide = () => {
    let div = document.querySelectorAll('.fourthSection .container .box div');
    div.forEach((item) => {
        let value = item.querySelector('.value').innerHTML;
        let slide = item.querySelector('.slide').style.background = `linear-gradient(to right, blue ${value}% , white ${100-value}%)`
    })
}
fillColorToSlide();
const showMsg = () => {
    alert("Massage Sent Sucessfully")
}
const showCV = () => {
    window.open('Assests/Resume.pdf','_blank');
}