document.querySelectorAll('.highlight').forEach(item => {
    item.addEventListener('click', () => {
        const analysisId = item.nextElementSibling.id;
        document.getElementById(analysisId).classList.toggle('hidden');
    });
});

function checkQuiz() {
    const answers = document.getElementsByName('quiz');
    let feedback = "Por favor, selecione uma opção.";
    answers.forEach(answer => {
        if (answer.checked && answer.value === "1") {
            feedback = "Correto! O samba foi usado como um meio de manipulação pelo governo.";
        } else if (answer.checked) {
            feedback = "Resposta incorreta. Tente novamente.";
        }
    });
    document.getElementById('quiz-feedback').textContent = feedback;
}

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

function checkQuiz() {
    const options = document.querySelectorAll('input[name="quiz"]');
    let score = 0;
    let correctValue = "1"; // O valor correto para a resposta do quiz

    options.forEach((option) => {
        if (option.checked && option.value === correctValue) {
            score++;
        }
    });

    const feedback = document.getElementById("quizFeedback");
    const scoreFeedback = document.getElementById("scoreFeedback");

    if (score > 0) {
        feedback.textContent = "Parabéns, você acertou!";
        scoreFeedback.textContent = `Seu score é: ${score} de 1.`;
    } else {
        feedback.textContent = "Tente novamente.";
        scoreFeedback.textContent = `Seu score é: ${score} de 1.`;
    }
}
