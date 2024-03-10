import { useState } from 'react'

const QuizEmbarquement = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [quizFinished, setQuizFinished] = useState(false)
    const [button, setButton] = useState(false)
    const [tryAgain, setTryAgain] = useState(false)

    const isButtonState = () => {
        setButton(!button)
    }

    const isTryAgainState = () => {
        setTryAgain(!tryAgain)
    }

    const resetQuiz = () => {
        setCurrentQuestion(0)
        setScore(0)
        setQuizFinished(false)
        setTryAgain(false)
    }

    const redirection = 'http://localhost:3000/DameRouge'

    const questions = [
        {
            question: 'Quel événement a causé l\'apparition de la bactérie dévastatrice responsable du mal de notre planète ?',
            options: ['Une tempête solaire', 'La chute d\'une météorite contaminée', 'Le réchauffement climatique', 'Une invasion extra-terrestre'],
            correctAnswer: 'Le réchauffement climatique'
        },
        {
            question: 'Comment appelle-t-on un pilote militaire français explorateur de l\'espace ?',
            options: ['Cosmonaute', 'Taïkonaute', 'Spationaute', 'Astronaute'],
            correctAnswer: 'Spationaute'
        },
        {
            question: 'La planète Greta tient son nom d\'une célèbre militante écologiste de l\'ancien temps ou l\'ère numérique telle qu\'on l\'appelle au 31ième siècle. Quel était le nom de famille de cette icône écologiste ?',
            options: ['Jackson', 'Thunberg', 'Schumacher', 'Macron'],
            correctAnswer: 'Thunberg'
        },
        {
            question: 'Comment a-t-on bâptisé le vaisseau spatial prévu pour le voyage interstellaire ?',
            options: ['Mars6', 'Jupiter8', 'Uranus5', 'Jupiter5'],
            correctAnswer: 'Jupiter5'
        },
        {
            question: 'Quel est le grade ou la fonction de Jaden Noam à bord du Jupiter5',
            options: ['Commandant', 'Lieutenant', 'Sergent', 'Général'],
            correctAnswer: 'Commandant'
        }
    ]

    const handleAnswer = (selectedAnswer) => {
        if (!quizFinished) {
            const isCorrectAnswer = selectedAnswer === questions[currentQuestion].correctAnswer;
        
            if (isCorrectAnswer) {
                setScore((prevScore) => prevScore + 1);
            }
        
            const nextQuestion = currentQuestion + 1;
        
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
            } 
            else {
                setQuizFinished(true)
        
                if (currentQuestion === 4 && selectedAnswer === 'Commandant' && score === 4) {
                alert(`Félicitations! Vous avez obtenu 100% de réussite.`)
                isButtonState(true)
                } else if (currentQuestion === 4 && selectedAnswer === 'Commandant' && score !== 4) {
                    alert(`Quiz terminé! Votre score est ${score + 1} sur ${questions.length}.`)
                    isTryAgainState(true)
                }
                else {
                alert(`Quiz terminé! Votre score est ${score} sur ${questions.length}.`)
                isTryAgainState(true)
                }
            }
        }
    }
      

    return (
        <div className='quiz-container'>
            <p className='quiz-header'><strong>Question {currentQuestion + 1}/{questions.length}</strong></p>
            <p>{questions[currentQuestion].question}</p>
            <ul>
                {questions[currentQuestion].options.map((option, index) => (
                    <li className='quiz-embarquement' key={index} onClick={() => handleAnswer(option)}>
                        <strong>{option}</strong>
                    </li>
                ))}
            </ul>
            <div
                onClick={() => resetQuiz()} 
                className={tryAgain ? 'quiz-buttonTry visible' : 'quiz-buttonTry hidden'}>
                Rejouer
            </div>
            <a  
                href={redirection}
                className={button ? 'quiz-button visible' : 'quiz-button hidden'}>
                Jupiter5
            </a>
        </div>
    )
}

export default QuizEmbarquement