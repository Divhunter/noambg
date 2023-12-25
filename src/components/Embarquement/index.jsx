// images
import astroFuz from '../../assets/icons/astro-fuz.png'

// styles
import './m-embarquement.css'
import './d-embarquement.css'

const Embarquement = () => {

	return (
		<section id='embarquement' className='embarquement'>
            <header>
                <h1>Embarquement</h1>
                <img src={astroFuz} alt='astro-fuz'/>
                <span>
                    Maman : "Mon petit rêveur, avant de partir pour de nouvelles aventures, assure-toi que ta chambre soit prête pour le décollage !"
                </span>
            </header>
            <p>
            Dans l'an 4500, notre monde, la Terre, vacillait au bord de l'extinction. Les ravages du réchauffement climatique et les déchets toxiques avaient engendré une bactérie dévastatrice, menaçant nos récoltes cruciales. C'était dans ce contexte sombre que Noam, jeune astronaute émérite, se préparait pour une mission d'une importance capitale.
            <br/><br/>
            S'entraînant avec détermination, Noam avait été promu capitaine du vaisseau spatial de pointe, le Edoni8. Sa mission : atteindre la planète Gaya32, une oasis lointaine d'espoir et de possibilités. Cette planète fertile était notre unique chance de survie, mais elle se trouvait à des années-lumière de notre galaxie.
            <br/><br/>
            Le voyage interstellaire, baptisé "Renaissance", n'était pas seulement un saut dans l'inconnu pour Noam, mais aussi un test cruciale pour la technologie avancée de notre époque. Le Edoni8 était bien plus qu'un vaisseau spatial ordinaire, c'était le pionnier d'une ère nouvelle, déterminé à prouver que l'humanité pouvait résister et prospérer face aux défis intergalactiques.
            <br/><br/>
            Noam, désormais le capitaine intrépide du Edoni8, savait que son rôle était bien au-delà de celui d'un simple astronaute. Il était le chef d'une mission visant à assurer la continuité de l'espèce humaine. Avec son équipage, composé des meilleurs experts en sciences, en technologie et en survie, ils se lançaient dans un voyage qui allait définir l'avenir des hommes.
            <br/><br/>
            Dans l'obscurité infinie de l'espace, Noam regardait les étoiles, se demandant s'il était prêt à relever un tel défi. C'était une aventure périlleuse, un test de l'endurance humaine et de la puissance de la machine. Le destin de l'humanité était suspendu à un fil galactique, et Noam était prêt à tisser une nouvelle ère de prospérité pour notre espèce.
            <br/><br/>
            C'était ainsi que commençait l'odyssée épique de Noam et du Edoni8, laissant derrière eux un monde en agonie pour atteindre les étoiles et assurer une renaissance pour l'humanité sur la mystérieuse Gaya32.
            </p>
        </section>
	) 
}
 
export default Embarquement