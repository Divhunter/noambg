// components
import QuizEmbarquement from '../QuizEmbarquement'

// images
import astroFuz from '../../assets/icons/astro-fuz.png'
import redEarth from '../../assets/pictures/redEarth.jpg'
import jupiter8 from '../../assets/pictures/jupiter8.jpg'
import cNoam from '../../assets/pictures/cNoam.jpg'

// styles
import './m-embarquement.css'
import './d-embarquement.css'

const Embarquement = () => {

	return (
        <>
            <section id='embarquement' className='embarquement'>
                <header>
                    <h1>Embarquement</h1>
                    <img src={astroFuz} alt='astro-fuz'/>
                    <span>
                        Maman : "Mon petit rêveur, avant de partir pour de nouvelles aventures, assure-toi que ta chambre soit prête pour le décollage !"
                    </span>
                </header>
                <h2 className='subHeader'>
                    Quatrième de couverture
                    <br/>
                    Jupiter5
                </h2>
                <p>
                    A l'aube du 31ième siècle, notre monde, la Terre, vacillait au bord de l'extinction. Les ravages du réchauffement climatique avait engendré une bactérie dévastatrice, menaçant tous les organismes végétaux. 
                    <br/><br/>
                    Chaque plante touchée par ce germe maléfique voyait son ADN torturé et déformé, provoquant des métamorphoses monstrueuses. Les tissus végétaux, autrefois symboles de vitalité, étaient désormais enveloppés d'atroces excroissances rougeâtres, à la fois nauséabondes, mortifères et, paradoxalement, avides de notre oxygène.
                    <br/><br/>
                    <img className='history-img' src={redEarth} alt='paysage de désolation'/>
                    <br/><br/>
                    C'était dans ce contexte sombre que le capitaine Jaden Noam, pilote militaire émérite, se préparait pour une mission d'une importance capitale.
                    <br/><br/>
                    S'entraînant avec détermination, il avait été désigné commandant du vaisseau spatial de pointe, le Jupiter5. Sa mission : atteindre la planète Greta, une oasis lointaine d'espoir et de possibilités. Cette planète fertile était notre unique chance de survie, mais elle se trouvait à des années-lumière de notre galaxie.
                    <br/><br/>
                    Le voyage interstellaire, baptisé "Renaissance", n'était pas seulement un saut dans l'inconnu pour le capitaine et son équipage, mais aussi un test cruciale pour la technologie avancée de notre époque.
                    <br/><br/>
                    Le Jupiter5 était bien plus qu'un vaisseau spatial ordinaire, c'était le pionnier d'une ère nouvelle, déterminé à prouver que l'humanité pouvait résister et prospérer face aux défis intergalactiques.
                    <br/><br/>
                    Et peut-être trouverions-nous, au fin fond de l'immensité cosmique, une réponse concrète à cette question existentielle qui, depuis l'aube des temps, ne cesse de nous hanter : sommes-nous seuls ?
                    <br/><br/>
                    <img className='history-img' src={jupiter8} alt='vaisseau spacial'/>
                    <br/><br/>
                    Le capitaine Noam, savait que son rôle était bien au-delà de celui d'un spationaute ordinaire. Il était le chef d'une mission visant à assurer la continuité de l'espèce humaine. Avec son équipage, composé des meilleurs experts en sciences, en technologie et en survie, ils se lançaient dans un voyage qui allait définir l'avenir des hommes.
                    <br/><br/>            
                    Dans l'obscurité infinie de l'espace, Noam regardait les étoiles, se demandant s'il était prêt à relever un tel défi. C'était une aventure périlleuse, un test de l'endurance humaine et de la puissance de la machine.
                    <br/><br/>
                    C'était ainsi que commençait l'odyssée épique du Jupiter5 et son équipage, laissant derrière eux un monde en agonie pour atteindre les étoiles et assurer une renaissance pour l'humanité sur la mystérieuse Greta.
                    <br/><br/>
                    <img className='history-img' src={cNoam} alt='visage de spationaute'/>
                </p>
            </section>
            <article className='quiz'>
                <p className='interlude'>
                    Si vous souhaitez embarquer sur le Jupiter5, je vous invite à tester vos capacités de spationaute en répondant au quiz suivant. Ici notre équipage à obtenu un score parfait de 100% :
                </p>
                <QuizEmbarquement />
            </article>
        </>
	) 
}
 
export default Embarquement