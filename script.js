let clickCount = 0;
const image = document.getElementById("image");
const noButtonAudio = document.getElementById("noButtonAudio");



function noFunction(){
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    clickCount++;



    switch(clickCount){
        case 1: 
        noButton.textContent = "Was that a mistake?";
        noButton.style.transform = "scale(.8)";
        noButton.style.fontSize="15px";
        yesButton.style.transform = "scale(1)";
        noButtonAudio.play();
        break;
        case 2:
        noButton.textContent = "Wrong button!";
        noButton.style.transform = "scale(.7)";
        yesButton.style.transform = "scale(1.2)";
        noButtonAudio.play();   
        break;
        case 3:
        noButton.textContent = "Please :(";
        noButton.style.transform = "scale(0.6)";
        noButton.style.fontSize="15px";
        yesButton.style.transform = "scale(1.4)";
        noButtonAudio.play();
        break;
        case 4:
        noButton.textContent = "last chance..";
        noButton.style.transform = "scale(0.5)";
        yesButton.style.transform = "scale(1.45)";
        noButtonAudio.play();
        break;
        case 5:
        noButton.textContent = "k";
        noButton.style.transform = "scale(0.0)";
        noButton.style.display = 'none';
        yesButton.style.transform = "scale(1.8)";
        const buttonContainer = document.querySelector('.button');
        buttonContainer.style.justifyContent = 'center';
        image.src = "images/no.gif";
        noButtonAudio.play();
        break;
    
    }
}
function yesFunction(){
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const buttonContainer = document.querySelector('.button');
    const yesButtonAudio = document.getElementById("yesButtonAudio");
    buttonContainer.style.display = 'none';
    yesButtonAudio.play();
    noButtonAudio.pause();
    image.src = "images/yes.gif";
    
    document.querySelector('.title').textContent = "i knew you would say yes! <3";

    // Create heart-shaped confetti
    const duration = 15 * 1000;
    const end = Date.now() + duration;

    function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#fffff', '#ff69b4', '#ffffff'],
            shapes: ['heart'],
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ffffff', '#ff69b4', '#ffffff'],
            shapes: ['heart'],
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }

    frame();
}