const questions = [
    {
        question: "Which Union Minister launched the 'Urjaveer' scheme in Andhra Pradesh?",
        options: ["Manohar Lal Khattar", "Rajnath Singh", "Nirmala Sitharaman", "Piyush Goyal"],
        answer: 0
    },
    {
        question: "What is the main goal of the 'Urjaveer' scheme?",
        options: ["Promote energy-efficient appliances", "Build new roads", "Increase agricultural output", "Develop new schools"],
        answer: 0
    },
    {
        question: "Who assumed the Chairmanship of the 68th UN CND for the first time?",
        options: ["Narendra Modi", "Rajnath Singh", "S. Jaishankar","Shambhu S Kumaran"],
        answer: 3
    },
    {
        question: "Which organization partnered with Flipkart to support Indian startups?",
        options: ["NITI Aayog","DPIIT", "RBI", "SEBI"],
        answer: 1
    },
    {
        question: "What was the theme of the Rising Rajasthan Global Investment Summit 2024?",
        options: ["Replete, Responsible, Ready", "Invest in Rajasthan", "Rajasthan Rising", "Future of Rajasthan"],
        answer: 0
    },
    {
        question: "Which scheme was inaugurated by PM Modi in Panipat, Haryana?",
        options: ["Pradhan Mantri Awas Yojana","Bima Sakhi Yojana", "Swachh Bharat Abhiyan", "Digital India"],
        answer: 1
    },
    {
        question: "What is the aim of the 'Bima Sakhi Yojana'?",
        options: ["Provide free healthcare", "Build new schools", "Empower women through financial literacy and insurance awareness","Increase agricultural output"],
        answer: 2
    },
    {
        question: "Which portal was launched by Union Minister Jitendra Singh to empower public administrators?",
        options: ["Amrit Gyaan Kosh", "Digital India Portal", "Swachh Bharat Portal", "Skill India Portal"],
        answer: 0
    },
    {
        question: "Which traditional Japanese practice was recognized by UNESCO as Intangible Cultural Heritage?",
        options: ["Tea Ceremony", "Ikebana", "Sake-Making","Origami"],
        answer: 2
    },
    {
        question: "Where was the 29th UN Climate Change Conference (COP29) held?",
        options: ["Baku, Azerbaijan", "Paris, France", "New York, USA", "Tokyo, Japan"],
        answer: 0
    },
    {
        question: "What is the Baku Finance Goal (BFG) announced at COP29?",
        options: ["Send USD 1.3 trillion in climate finance every year to developing countries", "Reduce carbon emissions by 50%", "Increase renewable energy usage by 30%", "Plant 1 billion trees"],
        answer: 0
    },
    {
        question: "Which Union Minister delivered India's National Statement at the High-level Segment of COP29?",
        options: ["Narendra Modi", "Rajnath Singh", "S. Jaishankar","Kirti Vardhan Singh"],
        answer: 3
    },
    {
        question: "What is the target for India's renewable energy capacity by 2030?",
        options: ["300 gigawatts", "400 gigawatts","500 gigawatts", "600 gigawatts"],
        answer: 2
    },
    {
        question: "Which country launched the world's first national soundscape titled 'Ääniä'?",
        options: ["Finland", "Sweden", "Norway", "Denmark"],
        answer: 0
    },
    {
        question: "What does the title 'Ääniä' mean in Finnish?",
        options: ["Sounds or Voices", "Nature", "Harmony", "Melody"],
        answer: 0
    },
    {
        question: "Which Union Minister co-chaired the Annual Summit of the Leadership Group for Industry Transition (LeadIT) at COP29?",
        options: ["Narendra Modi", "Kirti Vardhan Singh","Rajnath Singh", "S. Jaishankar"],
        answer: 1
    },
    {
        question: "What is the main focus of the 'Solarizing Communities through Women-led Climate Action' event?",
        options: ["Promote clean energy solutions at the grassroots level", "Build new schools", "Increase agricultural output", "Develop new roads"],
        answer: 0
    },
    {
        question: "Which session of the Maritime Safety Committee (MSC) was conducted from 2nd to 6th December 2024?",
        options: ["108th","109th", "110th", "107th"],
        answer: 1
    },
    {
        question: "Where was the 109th session of the Maritime Safety Committee (MSC) held?",
        options: ["London, UK", "New York, USA", "Paris, France", "Tokyo, Japan"],
        answer: 0
    },
    {
        question: "Which country signed an MoU with India for Quick Impact Projects (QIPs) to boost local development?",
        options: ["Brazil", "Mexico","Nicaragua", "Argentina"],
        answer: 2
    },
    {
        question: "What is the main goal of the Quick Impact Projects (QIPs) MoU between India and Nicaragua?",
        options: ["Build new schools", "Increase agricultural output", "Develop new roads","Enhance socio-economic infrastructure"],
        answer: 3
    },
    {
        question: "Which organization implemented the 'Urjaveer' scheme in Andhra Pradesh?",
        options: ["Energy Efficiency Services Limited (EESL)", "NITI Aayog", "RBI", "SEBI"],
        answer: 0
    },
    {
        question: "Who is the Chief Minister of Andhra Pradesh who inaugurated the 'Urjaveer' scheme?",
        options: ["Y. S. Jagan Mohan Reddy", "Nara Chandrababu Naidu","K. Chandrashekar Rao", "Pinarayi Vijayan"],
        answer: 1
    },
    {
        question: "Which Union Minister launched the 'Amrit Gyaan Kosh' Portal?",
        options: ["Narendra Modi","Jitendra Singh", "Rajnath Singh", "S. Jaishankar"],
        answer: 1
    },
    {
        question: "What is the main focus of the 'Amrit Gyaan Kosh' Portal?",
        options: ["Strengthen governance and empower public administrators", "Build new schools", "Increase agricultural output", "Develop new roads"],
        answer: 0
    },
    {
        question: "Which organization recognized traditional Japanese Sake-Making as Intangible Cultural Heritage?",
        options: ["WHO", "UNICEF", "FAO", "UNESCO"],
        answer: 3
    },
    {
        question: "What is the main goal of the Baku Finance Goal (BFG) announced at COP29?",
        options: ["Send USD 1.3 trillion in climate finance every year to developing countries", "Reduce carbon emissions by 50%", "Increase renewable energy usage by 30%", "Plant 1 billion trees"],
        answer: 0
    },
    {
        question: "Which Union Minister delivered India's National Statement at the High-level Segment of COP29?",
        options: ["Narendra Modi", "Rajnath Singh", "S. Jaishankar","Kirti Vardhan Singh"],
        answer: 3
    },
    {
        question: "What is the target for India's renewable energy capacity by 2030?",
        options: ["300 gigawatts", "400 gigawatts", "600 gigawatts","500 gigawatts"],
        answer: 3
    },
    {
        question: "Which country launched the world's first national soundscape titled 'Ääniä'?",
        options: ["Finland", "Sweden", "Norway", "Denmark"],
        answer: 0
    }
];




// Load the quiz when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    loadQuiz(questions);
});

function loadQuiz(questions) {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = ''; // Clear existing content

    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <h2>Q${index + 1}: ${question.question}</h2>
            ${question.options.map((option, i) => `
                <div class="option">
                    <label>
                        <input type="radio" name="question${index}" value="${i}">
                        ${option}
                    </label>
                </div>
            `).join('')}
            <hr class="divider">
        `;
        quizContainer.appendChild(questionElement);
    });
    
    document.getElementById('submit').addEventListener('click', () => {
        const { score, results } = calculateScore(questions);
        showResult(score, results);
    });
}

function calculateScore(questions) {
    let score = 0;
    const results = [];
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        const userAnswer = selectedOption ? parseInt(selectedOption.value) : null;
        if (userAnswer === question.answer) {
            score++;
        }
        results.push({
            question: question.question,
            userAnswer: userAnswer !== null ? question.options[userAnswer] : 'No answer',
            correctAnswer: question.options[question.answer],
            isCorrect: userAnswer === question.answer // Track if the answer was correct
        });
    });
    return { score, results };
}

function showResult(score, results) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `You scored ${score} out of ${results.length}<br><br>`;
    
    results.forEach((result, index) => {
        resultElement.innerHTML += `
            <div class="result-item">
                <strong>Q${index + 1}:</strong> ${result.question}<br>
                Your answer: <span class="${result.isCorrect ? 'correct' : 'incorrect'}">${result.userAnswer}</span><br>
                Correct answer: <span class="correct">${result.correctAnswer}</span><br>
                <hr class="divider">
            </div>
        `;
    });
}
