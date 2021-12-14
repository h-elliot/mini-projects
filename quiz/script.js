const quizData = [
	{
		question: 'What is the best flavor?',
		a: 'Strawberry',
		b: 'Mint',
		c: 'Peanut butter',
		d: 'Vanilla',
		correct: 'c',
	},
	{
		question: 'What is the capital of New York?',
		a: 'New York City',
		b: 'Albuquerque',
		c: 'Gotham City',
		d: 'Albany',
		correct: 'd',
	},
	{
		question: 'What is the coolest kind of tree?',
		a: 'Giant Redwood',
		b: 'White Birch',
		c: 'Ebony',
		d: 'A dead tree',
		correct: 'b',
	},
	{
		question: 'Which berry is the largest?',
		a: 'Pumpkin',
		b: 'Cucumber',
		c: 'Dragonfruit',
		d: 'Blueberry',
		correct: 'a',
	},
];

const q_text = document.getElementById('q_text');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQ = 0;

function loadQuiz() {
	const currentQData = quizData[currentQ];
	q_text.innerHTML = currentQData.question;
	a_text.innerHTML = currentQData.a;
	b_text.innerHTML = currentQData.b;
	c_text.innerHTML = currentQData.c;
	d_text.innerHTML = currentQData.d;

	currentQ++;
}

loadQuiz();
