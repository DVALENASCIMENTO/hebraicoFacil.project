const lessons = {
    alfabeto: [
        { word: 'א', translation: 'Alef', corresponding: 'A' },
        { word: 'ב', translation: 'Bet', corresponding: 'B' },
        { word: 'ג', translation: 'Gimel', corresponding: 'G' },
        { word: 'ד', translation: 'Dalet', corresponding: 'D' },
        { word: 'ה', translation: 'Hei', corresponding: 'H' },
        { word: 'ו', translation: 'Vav', corresponding: 'V' },
        { word: 'ז', translation: 'Zain', corresponding: 'Z' },
        { word: 'ח', translation: 'Chet', corresponding: 'Ch' },
        { word: 'ט', translation: 'Tet', corresponding: 'T' },
        { word: 'י', translation: 'Yud', corresponding: 'Y' },
        { word: 'כ', translation: 'Kaf', corresponding: 'K' },
        { word: 'ל', translation: 'Lamed', corresponding: 'L' },
        { word: 'מ', translation: 'Mem', corresponding: 'M' },
        { word: 'נ', translation: 'Nun', corresponding: 'N' },
        { word: 'ס', translation: 'Samekh', corresponding: 'S' },
        { word: 'ע', translation: 'Ayin', corresponding: 'A' },
        { word: 'פ', translation: 'Pei', corresponding: 'P' },
        { word: 'צ', translation: 'Tzadi', corresponding: 'Tz' },
        { word: 'ק', translation: 'Kuf', corresponding: 'K' },
        { word: 'ר', translation: 'Resh', corresponding: 'R' },
        { word: 'ש', translation: 'Shin', corresponding: 'Sh' },
        { word: 'ת', translation: 'Tav', corresponding: 'T' }
    ],
    frases: [
        { phrase: 'שלום', translation: 'Olá', transliteration: 'Shalom' },
        { phrase: 'תודה', translation: 'Obrigado', transliteration: 'Todah' },
        { phrase: 'מה שלומך?', translation: 'Como você está?', transliteration: 'Mah shlomcha?' },
        { phrase: 'בוקר טוב', translation: 'Bom dia', transliteration: 'Boker tov' },
        { phrase: 'לילה טוב', translation: 'Boa noite', transliteration: 'Laila tov' },
        { phrase: 'סליחה', translation: 'Desculpa', transliteration: 'Slichah' },
        { phrase: 'כן', translation: 'Sim', transliteration: 'Ken' },
        { phrase: 'לא', translation: 'Não', transliteration: 'Lo' },
        { phrase: 'מה השעה?', translation: 'Que horas são?', transliteration: 'Mah hashaah?' },
        { phrase: 'אני אוהב אותך', translation: 'Eu te amo', transliteration: 'Ani ohev otach' }, // masculino
        { phrase: 'אני אוהבת אותך', translation: 'Eu te amo', transliteration: 'Ani ohevet otcha' }, // feminino
        { phrase: 'כמה זה עולה?', translation: 'Quanto custa isso?', transliteration: 'Kama ze oleh?' },
        { phrase: 'איפה השירותים?', translation: 'Onde é o banheiro?', transliteration: 'Eifo hasherutim?' },
        { phrase: 'מה שמך?', translation: 'Qual é o seu nome?', transliteration: 'Mah shimcha?' }, // masculino
        { phrase: 'מה שמך?', translation: 'Qual é o seu nome?', transliteration: 'Mah shmech?' }, // feminino
        { phrase: 'שמי הוא...', translation: 'Meu nome é...', transliteration: 'Shmi hu...' },
        { phrase: 'מאיפה אתה?', translation: 'De onde você é?', transliteration: 'Me-eifo atah?' }, // masculino
        { phrase: 'מאיפה את?', translation: 'De onde você é?', transliteration: 'Me-eifo at?' }, // feminino
        { phrase: 'אני מ...', translation: 'Eu sou de...', transliteration: 'Ani mi...' },
        { phrase: 'אני לא מבין', translation: 'Eu não entendo', transliteration: 'Ani lo mevin' }, // masculino
        { phrase: 'אני לא מבינה', translation: 'Eu não entendo', transliteration: 'Ani lo mevina' }, // feminino
        { phrase: 'אתה יכול לעזור לי?', translation: 'Você pode me ajudar?', transliteration: 'Ata yachol laazor li?' }, // masculino
        { phrase: 'את יכולה לעזור לי?', translation: 'Você pode me ajudar?', transliteration: 'At yechola laazor li?' }, // feminino
        { phrase: 'הכל בסדר', translation: 'Tudo bem', transliteration: 'Hakol beseder' },
        { phrase: 'יש לך חדר פנוי?', translation: 'Você tem um quarto disponível?', transliteration: 'Yesh lecha cheder panuy?' }, // masculino
        { phrase: 'יש לך חדר פנוי?', translation: 'Você tem um quarto disponível?', transliteration: 'Yesh lach cheder panuy?' } // feminino
    ],
    numeros: [
        { word: 'אחת', translation: 'Um', transliteration: 'Echat' },
        { word: 'שתיים', translation: 'Dois', transliteration: 'Shtaim' },
        { word: 'שלוש', translation: 'Três', transliteration: 'Shalosh' },
        { word: 'ארבע', translation: 'Quatro', transliteration: 'Arba' },
        { word: 'חמש', translation: 'Cinco', transliteration: 'Chamesh' },
        { word: 'שש', translation: 'Seis', transliteration: 'Shesh' },
        { word: 'שבע', translation: 'Sete', transliteration: 'Sheva' },
        { word: 'שמונה', translation: 'Oito', transliteration: 'Shmoneh' },
        { word: 'תשע', translation: 'Nove', transliteration: 'Tesha' },
        { word: 'עשר', translation: 'Dez', transliteration: 'Eser' }
    ]
};

// Função para carregar uma lição
function loadLesson(category) {
    const lessonContainer = document.getElementById('lesson-container');
    lessonContainer.innerHTML = ''; // Limpa o conteúdo anterior
    const selectedLessons = lessons[category];

    if (!selectedLessons) {
        alert('Categoria não encontrada.');
        return;
    }

    selectedLessons.forEach((item) => {
        const lessonDiv = document.createElement('div');
        lessonDiv.classList.add('lesson-item');
        lessonDiv.innerHTML = `
            <h3>${item.word || item.phrase}</h3>
            <p>Tradução: ${item.translation}</p>
            ${item.corresponding ? `<p>Letra correspondente: ${item.corresponding}</p>` : ''}
            ${item.transliteration ? `<p>Transliteração: ${item.transliteration}</p>` : ''}
        `;
        lessonContainer.appendChild(lessonDiv);
    });

    createQuiz(category);
}




// Função para criar um quiz com base na lição carregada
function createQuiz(category) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = ''; // Limpa o conteúdo anterior
    const selectedLessons = lessons[category];

    if (!selectedLessons) {
        alert('Categoria não encontrada.');
        return;
    }

    selectedLessons.forEach((item) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('quiz-question');

        const options = [
            selectedLessons[Math.floor(Math.random() * selectedLessons.length)].translation,
            selectedLessons[Math.floor(Math.random() * selectedLessons.length)].translation,
            item.translation
        ];
        options.sort(() => 0.5 - Math.random()); // Embaralhar as opções

        questionDiv.innerHTML = `
            <h3>Qual é a tradução de: ${item.word || item.phrase}?</h3>
            ${options.map(option => `<button onclick="checkAnswer('${option}', '${item.translation}')">${option}</button>`).join('')}
        `;

        quizContainer.appendChild(questionDiv);
    });
}

// Função para verificar a resposta do quiz
function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert('Resposta correta!');
    } else {
        alert('Resposta incorreta.');
    }
}

// Event listener para o botão de carregamento de lições
document.querySelectorAll('.load-lesson-button').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        loadLesson(category);
    });
});

// Função para alternar o tema
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Função para iniciar o reconhecimento de voz
function startRecognition() {
    // Implementação para reconhecimento de voz (exemplo com Web Speech API)
    if (!('webkitSpeechRecognition' in window)) {
        alert('Seu navegador não suporta reconhecimento de voz.');
        return;
    }
    
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'he-IL'; // Configurar para o idioma hebraico
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        alert('Você disse: ' + transcript);
    };
    recognition.onerror = function(event) {
        alert('Erro: ' + event.error);
    };
    recognition.start();
}
