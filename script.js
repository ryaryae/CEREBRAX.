const levels = [
    {
        images: ["speedometer.png", "speed-of-light.avif", "running.jpg", "flash.webp"],
        answer: "speed"
    },
    {
        images: ["computer.jpg", "html2.jpg", "css.jpg", "c++.jpg"],
        answer: "programming"
    },
    {
        images: ["equipment.jpg", "tools.jpg", "engineer.jpg", "blueprint.jpg"],
        answer: "engineer"
    },
    {
        images: ["moderncircuit.jpg", "electricalcircuits.jpg", "currentelecticity.jpg", "ic.jpg"],
        answer: "circuit"
    },
    {
        images: ["code.jpg", "codes.jpg", "htmlcode.jpg", "javacode.jpg"],
        answer: "code"
    },
    {
        images: ["hardware.jpg", "hardwares.jpg", "electrichardware.jpg", "hardwaresss.jpg"],
        answer: "hardware"
    },
    {
        images: ["house.jpg", "3dautocad.png", "3dcad.jpg", "2dcad.jpg"],
        answer: "autocad"
    },
    {
        images: ["integral.jpg", "integrals.jpg", "integralsss.jpg", "integralssss.jpg"],
        answer: "integral"
    },
    {
        images: ["physics1.jpg", "physics2.jpg", "physics3.jpg", "physics4.jpg"],
        answer: "physics"
    },
    {
        images: ["database1.jpg", "database2.jpg", "database3.jpg", "database4.jpg"],
        answer: "database"
    }
    
];

let currentLevel = 0;

function loadGame() {
    const level = levels[currentLevel];
    document.getElementById("img1").src = level.images[0];
    document.getElementById("img2").src = level.images[1];
    document.getElementById("img3").src = level.images[2];
    document.getElementById("img4").src = level.images[3];

    const answerBox = document.getElementById("answer-box");
    answerBox.innerHTML = "";

    let firstInput = null;

    for (let i = 0; i < level.answer.length; i++) {
        const input = document.createElement("input");
        input.setAttribute("maxlength", "1");
        input.classList.add("letter-input");

        // Automatically move to next input when a letter is entered
        input.addEventListener("input", function () {
            if (this.value.length === 1) {
                const nextInput = this.nextElementSibling;
                if (nextInput) {
                    nextInput.focus();
                }
            }
        });

        answerBox.appendChild(input);

        // Store reference to the first input field
        if (i === 0) {
            firstInput = input;
        }
    }

    document.getElementById("result").innerText = "";

    // Set focus on the first input field when the game loads
    if (firstInput) {
        firstInput.focus();
    }
}

function checkAnswer() {
    let userAnswer = "";
    const inputs = document.querySelectorAll(".letter-input");

    inputs.forEach(input => {
        userAnswer += input.value.trim().toLowerCase();
    });

    if (userAnswer === levels[currentLevel].answer) {
        document.getElementById("result").innerText = "Correct!";
        setTimeout(nextLevel, 1000);
    } else {
        document.getElementById("result").innerText = "Try Again!";
    }
}

function nextLevel() {
    if (currentLevel < levels.length - 1) {
        currentLevel++;
        loadGame();
    } else {
        document.getElementById("result").innerText = "Congratulations! You've completed all levels!";
    }
}

// Initialize the game
loadGame();

function nextRound() {
    currentLevel = (currentLevel + 1) % levels.length;
    loadGame();
}

window.onload = loadGame;

document.getElementById('backHome').addEventListener('click', () => {
        window.location.href = '../main.html'
})
