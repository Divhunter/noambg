// Hooks and dependencies
import { useEffect } from 'react'

// components
import QuizDameRouge from '../../components/QuizDameRouge'

// images
import bacterie from '../../assets/pictures/bacterie.jpg'
import planteInfecte from '../../assets/pictures/planteInfecte.jpg'
import banquise from '../../assets/pictures/banquise.jpg'
import mayer from '../../assets/pictures/mayer.jpg'
import helico from '../../assets/pictures/helico.jpg'

const DameRouge = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])  

    return (
        <>
            <section id='dame-rouge' className='dame-rouge'>
                <h2 className='subHeader'>
                    Jupiter5
                    <br/>
                    Chapitre 1 : la Dame Rouge
                </h2>
                <p>
                    En l'an 2084, dans la station terrestre Équinox, principale base scientifique universelle dédiée à l'étude de l'écosystème microbien, régnait une atmosphère de désolation.
                    <br/><br/>
                    La dernière équipe de chercheurs en place s'apprêtait à quitter définitivement les lieux, car "la Dame Rouge" s'y était invitée. Nous lui avions donné ce nom en raison des effets contre nature qu'elle déclenchait, agissant à l'antipode de Dame Nature. 
                    <br/><br/>
                    La bactérie devenait de plus en plus virulente, se propageant de manière exponentielle.
                    <br/><br/>
                    <img className='history-img' src={bacterie} alt='microbe'/>
                    <br/><br/>
                    Le paradoxe résidait dans le fait que cette menace invisible n'était pas directement mortelle pour l'homme ; elle ciblait plutôt les végétaux, induisant des mutations effroyables : leurs spores diffusaient une odeur pestilentielle, et leurs tissus, désormais indigestes pour tous les êtres vivants, étaient couverts de pustules rouges suintantes.
                    <br/><br/>
                    La particularité la plus inquiétante de ce pathogène résidait dans sa faculté à transformer le système respiratoire végétatif, une métamorphose jusqu'alors inimaginable de l'ADN.  
                    <br/><br/>
                    Les plantes, nécessitant le dioxyde de carbone pour survivre et fournissant de l'oxygène en retour, avaient subi une transformation radicale. Elles respiraient dorénavant comme nous-autres, annonçant les prémices d'un dérèglement généralisé de l'atmosphère terrestre.
                    <br/><br/>
                    <img className='history-img' src={planteInfecte} alt='plante veineuse'/>
                    <br/><br/>
                    Nous n'avions pas prévu ce scénario apocalyptique. Aucune archive scientifique, aucun événement historique ne nous avait avertis, aucune appréciation de nos pères sur un tel risque de catastrophe naturelle ne nous avait éclairés sur la voie.
                    <br/><br/>
                    Nous comprenons avec certitude, aujourd'hui seulement, que cette entité enfouie dans le pergélisol était la cause principale de l'extinction des dinosaures il y a des millénaires. 
                    <br/><br/>
                    La fonte avait réveillé et libéré la Dame de sa prison de glace. 
                    <br/><br/>
                    <img className='history-img' src={banquise} alt='banquise'/>
                    <br/><br/>
                    "Docteur Mayer, les derniers résultats sont préoccupants", annonça Marcha, les yeux cernés, alourdis par la fatigue et l'inquiétude". 
                    <br/><br/>
                    "Cette maudite bactérie résiste à tous les antimicrobiens. Les halogènes et les rayons ultraviolets ne font qu'enrayer sa propagation infectieuse."
                    <br/><br/>
                    - "Quelles sont les données pour la serre expérimentale ?", s'alarma le Docteur Mayer.
                    <br/><br/>
                    - "Le taux de contamination progresse de manière affolante. L'appauvrissement en oxygène est manifeste, son niveau a chuté jusqu'au seuil critique de 17% en seulement quelques heures. Les souris, Jungle, Docker et Méribel ont succombé à l'asphyxie. Dakota et Berta sont en train de mourir. 
                    <br/><br/>
                    La végétation, elle-même finira par manquer de cet oxygène qu'elle absorbe avec plus d'appétence que nos cobayes. Bientôt plus rien ne survivra."
                    <br/><br/>
                    <img className='history-img' src={mayer} alt='scientifique sénior inquiet'/>
                    <br/><br/>
                    - "Les informations fournies par l'état-major concernant la progression géographique du DR-80 (Dame Rouge - 2080, année de la découverte de la bactérie) ne doivent donc pas être sous-estimées.
                    <br/><br/>
                    La taïga est touchée à hauteur de 10%. Les forêts amazonienne, canadienne et congolaise affichent un taux de contamination de 5%. Quant à la flore marine, elle présente globalement un taux de contagion de 3%.
                    <br/><br/>
                    Nous sommes désormais confrontés à la menace universelle la plus sinistre! 
                    <br/><br/>
                    Marcha, alertez le Poste de Commandement, nous rentrons tous au pays pour une conférence préventive d'une importance cruciale. 
                    <br/><br/>
                    Il est impératif de convaincre le secrétaire à la défense de diffuser cette information à l'échelle internationale avant qu'il ne soit trop tard."
                    <br/><br/>
                    <img className='history-img' src={helico} alt='hélicoptère décollage'/>
                    <br/><br/>
                </p>
            </section>
            <article className='quiz'>
                <p className='interlude'>
                    Si vous souhaitez participer à la mission visant à convaincre le secrétaire à la défense de l'imminence de cette menace, je vous propose de mettre à l'épreuve vos compétences scientifiques en répondant au quiz suivant. Nos chercheurs ont obtenu un score parfait de 100% :
                </p>
                <QuizDameRouge />
            </article>
        </>
    )
}

export default DameRouge