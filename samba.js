document.querySelectorAll('.highlight').forEach(item => {
    item.addEventListener('click', () => {
        const analysisId = item.nextElementSibling.id;
        document.getElementById(analysisId).classList.toggle('hidden');
    });
});

function openModal() {
    const modal = document.getElementById("modalOverlay");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modalOverlay");
    modal.style.display = "none";
}

function openModalTrabalhismo() {
    const modal = document.getElementById("modalTrabalhismo");
    modal.style.display = "block";
}

function closeTrabalhismo() {
    const modal = document.getElementById("modalTrabalhismo");
    modal.style.display = "none";
}

function openNacional() {
    const modal = document.getElementById("modalNacional");
    modal.style.display = "block";
} 

function closeNacional() {
    const modal = document.getElementById("modalNacional");
    modal.style.display = "none";
 
}

function openRelacao() {
    const modal = document.getElementById("modalRelacao");
    modal.style.display = "block";
}

function closeRelacao() {
    const modal = document.getElementById("modalRelacao");
    modal.style.display = "none";
}

function open1945() {
    const modal = document.getElementById("modal1945")
    modal.style.display = "block";
}

function close1945() {
    const modal = document.getElementById("modal1945")
    modal.style.display = "none";
}

function saveResponse() {
    const response = document.getElementById('responseIntro').value;
    localStorage.setItem('response', response);
    alert('Resposta salva com sucesso!');
}

window.onload = function() {
    const savedResponse = localStorage.getItem('response');
    if (savedResponse) {
        document.getElementById('responseIntro').value = savedResponse;
    }
};



let score = 0;

function nextQuestion(currentQuestionIndex) {
    const currentQuestion = document.getElementById(`question-${currentQuestionIndex}`);
    const selectedOption = document.querySelector(`input[name="quiz${currentQuestionIndex}"]:checked`);
 
    if (!selectedOption) {
        alert("Por favor, selecione uma resposta antes de continuar.");
        return;
    }

    if (selectedOption.value === "1") {
        score++;
    }

    currentQuestion.classList.remove('quiz-active');
    currentQuestion.classList.add('quiz-hidden');

    const nextQuestionIndex = currentQuestionIndex + 1;
    const nextQuestion = document.getElementById(`question-${nextQuestionIndex}`);

    if (nextQuestion) {
        nextQuestion.classList.remove('quiz-hidden');
        nextQuestion.classList.add('quiz-active');
    } else {
        showScore();
    }
}
  

function showScore() {
    const scoreSection = document.getElementById("score-section");
    const scoreDisplay = document.getElementById("score-display");

    scoreDisplay.innerText = `Você acertou ${score} de 5 perguntas.`;

    scoreSection.style.display = "block";
}

function checkQuiz() {
    const answers = document.getElementsByName('quiz');
    let feedback = "Por favor, selecione uma opção.";
    answers.forEach(answer => {
        if (answer.checked) {
            feedback = (answer.value === "1") ? "Correto! O samba foi usado como um meio de manipulação pelo governo." : "Resposta incorreta. Tente novamente.";
        }
    });
    document.getElementById('quizFeedback').textContent = feedback;
  }

  function showLocalVideo() {
    const modal = document.getElementById("video-modal");
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
}

function closeVideoModal() {
    const modal = document.getElementById("video-modal");
    const videoElement = document.getElementById("local-video");

    videoElement.pause();

    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
}