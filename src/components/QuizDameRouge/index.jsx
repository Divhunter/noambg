import { useState } from 'react'

const QuizDameRouge = () => {
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

    const redirection1 = 'http://localhost:3000/ProgrammeJupiter'

    const questions = [
        {
            question: 'À quel département scientifique Équinox, le centre de recherche, est-il dédié ?',
            options: ['le département d\'étude des activités sismiques', 'le département d\'étude de l\' écosystème microbien', 'le département d\'étude astronomique', 'le département d\'étude des nouvelles technologies'],
            correctAnswer: 'le département d\'étude de l\' écosystème microbien',
        },
        {
            question: 'Quel nom a-t-on donné à la bactérie responsable de la mutation des organismes végétaux ?',
            options: ['La Peur Rouge', 'Le Fléau Vert', 'La Reine Blanche', 'La Dame Rouge'],
            correctAnswer: 'La Dame Rouge'
        },
        {
            question: 'Ce microbe a pour particularité de modifier l\'ADN des plantes. Quel phénomène se produit-il sur le végétal infecté ?',
            options: ['La modification de son système respiratoire', 'L\'apparition de pustules hautements radioactives', 'Une mort subite', 'Une métamorphose en créature hostile et carnivore'],
            correctAnswer: 'La modification de son système respiratoire'
        },
        {
            question: 'Quelle serait la sinistre conséquence d\'une contamination à l\'echelle mondiale?',
            options: ['Un dérèglement généralisé de l\'atmosphère terrestre', 'L\'effondrement du noyau terrestre', 'Un hiver nucléaire qui détruirait toute forme de vie', 'Le règne des végétaux sur le reste des espèces terrestres'],
            correctAnswer: 'Un dérèglement généralisé de l\'atmosphère terrestre'
        },
        {
            question: 'Le taux d\'oxygène dans l\'air doit généralement rester autour de 20,9% pour garantir une respiration normale. À quel niveau critique l\'oxygène a chuté dans la serre expérimentale',
            options: ['15%', '3%', '18.5%', '17%'],
            correctAnswer: '17%'
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
        
                if (currentQuestion === 4 && selectedAnswer === '17%' && score === 4) {
                alert(`Félicitations! Vous avez obtenu 100% de réussite.`)
                isButtonState(true)
                } else if (currentQuestion === 4 && selectedAnswer === '17%' && score !== 4) {
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
                    <li className='quiz-dame-rouge' key={index} onClick={() => handleAnswer(option)}>
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
                href={redirection1}
                className={button ? 'quiz-button visible' : 'quiz-button hidden'}>
                Jupiter5
            </a>
        </div>
    )
}

export default QuizDameRouge