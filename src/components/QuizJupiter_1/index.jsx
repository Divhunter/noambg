import { useState } from 'react'

const QuizJupiter_1 = () => {
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

    const redirection = 'http://localhost:3000/Jupiter_1'

    const questions = [
        {
            question: 'Quel est le niveau d\'habilitation d\'accès au programme Jupiter ?',
            options: ['Confidentiel', 'Secret', 'Limité', 'Top Secret'],
            correctAnswer: 'Top Secret'
        },
        {
            question: 'Parmis les propositions suivantes, quels sont les phénomènes écologiques constatés liés à la menace DR-80 ?',
            options: ['La manifestation de nuées dévastatrices de criquets ainsi qu\'une invasion de fourmis rouge', 'De fortes éruptions volcaniques ainsi que des séismes d\'une intensité extrêmement élevée', 'Des échouements à répétitions de mamiphères marins ainsi que des anomalies dans les migrations aviaires', 'Des pluies acides mortelles ainsi que l\'élévation spectaculaire du niveau des oceans'],
            correctAnswer: 'Des échouements à répétitions de mamiphères marins ainsi que des anomalies dans les migrations aviaires'
        },
        {
            question: 'Le programme Jupiter est un dossier classé secret défense de grande envergure. Quel autre projet sensible durant la Seconde Guerre mondiale fût mené ?',
            options: ['Le projet Manhattan', 'Le projet Blair Witch', 'L\'opération Tempête du désert', 'Le programme Apollo'],
            correctAnswer: 'Le projet Manhattan'
        },
        {
            question: 'Que signifie les initiales de l\'organisation PU anciennement dénommé Organisation des Nations Unies',
            options: ['Pôle Universel', 'Parti Unanime', 'Prisme Universel', 'Palais Universel'],
            correctAnswer: 'Prisme Universel'
        },
        {
            question: 'Quel est l\'objectif du programme Jupiter ?',
            options: ['Demander de l\'aide à une intelligence extraterrestre', 'Trouver un antibiotique pour iradiquer DR-80', 'Préparer les Jeux Olympiques de 2090', 'Guider l\'humanité vers les étoiles'],
            correctAnswer: 'Guider l\'humanité vers les étoiles',
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
        
                if (currentQuestion === 4 && selectedAnswer === 'Guider l\'humanité vers les étoiles' && score === 4) {
                alert(`Félicitations! Vous avez obtenu 100% de réussite.`)
                isButtonState(true)
                } else if (currentQuestion === 4 && selectedAnswer === 'Guider l\'humanité vers les étoiles' && score !== 4) {
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
                    <li className='quiz-programme-jupiter' key={index} onClick={() => handleAnswer(option)}>
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

export default QuizJupiter_1