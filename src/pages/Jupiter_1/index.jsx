// Hooks and dependencies
import { useEffect } from 'react'

// components
import QuizJupiter_1 from '../../components/QuizJupiter_1'

// images
import oiseaux from '../../assets/pictures/oiseaux.jpg'
import etatMajor from '../../assets/pictures/etatMajor.jpg'
import mavuba from '../../assets/pictures/mavuba.jpg'


const Jupiter_1 = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])  

    return (
        <>
            <section id='dame-rouge' className='dame-rouge'>
                <h2 className='subHeader'>
                    Jupiter5
                    <br/>
                    Chapitre 2 : le programme Jupiter
                </h2>
                <p>
                    En outre classé Top Secret par les plus hautes sphères d'autorité, le programme Jupiter avait pris une dimension d'envergure planétaire.
                    <br/><br/>
                    Les chefs d'état-major des nations avaient mobilisé les meilleurs scientifiques, fédérant des biochimistes, biologistes, physiciens, ingénieurs technologiques... parmi la société savante du monde entier, autour d'un projet dont la portée aurait probablement dépassé la compréhension du commun des mortels en ce siècle.
                    <br/><br/>
                    Lorsque notre planète malade révéla ses premiers aspects symptomatiques, tels que les échouements à répétition de mammifères marins sur les plages du Mexique et de la côte ouest des États-Unis, ainsi que les anomalies des grandes migrations aviaires de 2085, le programme Jupiter fut approuvé.
                    <br/><br/>
                    <img className='history-img' src={oiseaux} alt='migration aviaire'/>
                    <br/><br/>
                    Pour des raisons de stabilité sociale à l'échelle internationale, le Prisme Universel anciennement l'Organisation des Nations Unies avait dissimulé, par le biais d'une communication stratégique, les véritables causes des perturbations écologiques liées à la menace DR-80.
                    <br/><br/>
                    L'existence de la Dame Rouge ne devait en aucun cas émerger dans la pensée collective. L'accroissement de déchets imputrescibles dans les mers, les gaz à effet de serre... participèrent à l'habile argutie d'une information manipulée.
                    <br/><br/>
                    Mayer et son équipe étaient en charge de piloter la plus vaste opération expérimentale et secrète jamais constatée depuis le projet Manhattan durant la Seconde Guerre Mondiale.
                    <br/><br/>
                    <img className='history-img' src={etatMajor} alt='réunions des chefs militaires'/>
                    <br/><br/>
                    "Ne vous méprenez pas messieurs, nous ne sommes pas ici pour résoudre l'équation DR-80. Notre mission dépasse cette aspiration salutaire dont l'issue est inextricable selon les derniers rapports d'analyse de nos IA les plus avancées. 
                    <br/><br/>
                    Nos intentions vont bien au-delà de ce que notre technologie, à ce jour, nous permet d'accomplir", déclara Mayer à ses homologues scientifiques.
                    <br/><br/>
                    "Le programme Jupiter est un projet à très long terme, dont la mise en œuvre s'étale sur des générations. Ni vous ni moi ne pourrons le mener à terme. 
                    Nous préparons l'avenir, nous sommes la première esquisse de la toile qui guidera l'humanité vers les étoiles. 
                    <br/><br/>
                    À présent, mesdames et messieurs, c'est un privilège pour moi de céder la parole au secrétaire général du Prisme Universel, Sire Alex Mavuba."
                    <br/><br/>
                    <img className='history-img' src={mavuba} alt='vieil homme noir'/>
                </p>
            </section>
            <article className='quiz'>
                <p className='interlude'>
                L'annonce imminente de l'argumentaire du secrétaire général est d'une importance capitale, exigeant des niveaux de concentration et de compréhension exceptionnels. Les initiés qui ont été soumis au quiz suivant ont atteint un score parfait de 100%, démontrant ainsi leur maîtrise des enjeux à venir :
                </p>
                <QuizJupiter_1 />
            </article>
        </>
    )
}

export default Jupiter_1