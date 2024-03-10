// images
import astroBook from '../../assets/icons/astro-book.png'

// styles
import './m-about.css'
import './d-about.css'

const About = () => {

	return (
		<section id='about' className='about'>
            <header>
                <h1>A propos</h1>
                <img src={astroBook} alt='astronaute'/>
                <span>
                    Papa : "Petit terrien, tu-as encore la tête dans les étoiles ? Penses à faire tes devoirs, tu-veux bien ?"
                </span>
            </header>
            <p>
                Salut les explorateurs intrépides !
                <br/><br/>
                Je m'appelle Noam, un petit spationaute avec une imagination aussi grande que l'univers tout entier. 
                <br/><br/>
                Depuis que je suis tout petit, je suis fasciné par les étoiles qui brillent dans le ciel comme des diamants scintillants.
                <br/><br/>
                Pendant que d'autres enfants peuvent s'amuser avec des jouets ordinaires, moi, je me lance dans des aventures intergalactiques dans ma tête. 
                <br/><br/>
                J'adore plonger dans des livres remplis de mystères célestes et rêver d'explorer des planètes lointaines. 
                <br/><br/>
                Quand la nuit tombe, je m'installe sous les étoiles avec mes télescopes en carton pour découvrir les secrets du cosmos.
                <br/><br/>
                Mais ce n'est pas tout ! J'ai une autre passion dans ma vie : les jeux vidéo. 
                <br/><br/>
                Je m'évade dans des mondes virtuels où je deviens le héros de mon histoire. 
                <br/><br/>
                Mon rêve ultime ? Devenir un grand YouTuber et partager avec vous mes aventures interstellaires. 
                <br/><br/>
                Imaginez-vous, vous et moi, explorant ensemble des mondes épiques et découvrant les mystères de l'espace !
                <br/><br/>
                Alors, préparez-vous à embarquer avec moi pour des voyages interplanétaires, des découvertes astronomiques et, bien sûr, des aventures vidéoludiques palpitantes. 
                <br/><br/>
                Suivez-moi dans cette odyssée, car l'espace n'a jamais été aussi cool !
            </p>
        </section>
	) 
}
 
export default About