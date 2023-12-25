// images
import lion from '../../assets/icons/lion.png'

// styles
import './m-about.css'
import './d-about.css'

const About = () => {

	return (
		<section id='about' className='about'>
            <header>
                <h1>A propos</h1>
                <img src={lion} alt='lion'/>
                <span>
                    "Il y a des artistes surgis de nulle part qui ont la capacité de captiver l'auditeur dès la première écoute, presque par surprise. Léon fait partie de ceux-là."
                    <br/><br/>
                    Olivier Cachin - InterSessions
                </span>
            </header>
            <p>
                Dès son plus jeune âge, à Kinshasa, Léon utilise la musique pour chasser le blues. Et la soul américaine est son genre de prédilection, via la collection de disques de son père qui écoute religieusement tous les dimanches Marvin Gaye, Barry White, Bobby Womack, Al Green, bref le meilleur de la soul seventies. Mais aussi le jazz avec Nat King Cole, Maceo Parker ou Louis Amstrong. Une éducation musicale de choix.
                <br/><br/>
                Quand la famille de Léon débarque en France en 1989, elle atterrit à Toulouse. Léon multiplie les petits groupes, les expériences, les rencontres. Il cherche sa voie et plus encore sa VOIX qu'il trouve entre Barry White et James Brown. 
                <br/><br/>
                Léon est un soulman moderne avec ses héros et ses modèles.
                Mais surtout, <strong>un LION de scène</strong>. 
                <br/><br/>
                A bon attendeur...
            </p>
        </section>
	) 
}
 
export default About