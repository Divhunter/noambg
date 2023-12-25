// images
import phone from '../../assets/icons/phone.png'

// styles
import './m-contact.css'
import './d-contact.css'

const Contact = () => {

	return (
		<section id='contact' className='contact'>
            <header>
                <h1>Contact</h1>
                <img src={phone} alt='phone'/>
                <span>
                    "Une voix chaude, grave, profonde, ça le fait complètement... 
                    <br/>
                    c'est d'abord son timbre vocal qui m'a étonnée : je me rappelle avoir pensé et même exprimé à haute voix : Punaise, il a un grain vocal comme les anciens..."
                    <br/><br/>
                    Bluesy - funk-o-logy.com
                </span>
            </header>
            <p></p>
        </section>
	) 
}

export default Contact