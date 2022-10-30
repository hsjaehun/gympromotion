import Header from "../../components/Header";
import HeaderImage from "../../assets/images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Contact.css";

const contact = () => {
	return (
		<>
			<Header title='Get In Touch' image={HeaderImage}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
				officiis blanditiis alias nulla, repudiandae repellendus quidem sint
				recusandae, nemo corporis iure laborum quam sequi. Ratione tempore
				aut rem suscipit a?
			</Header>
			<section className='contact'>
				<div className='container contact__container'>
					<div className='contact__wrapper'>
						<a
							href='mailto:hsjaehun@gmail.com'
							target='_blank'
							rel='noreferrer noopener'
						>
							<MdEmail />
						</a>
						<a
							href='http://m.me/'
							target='_blank'
							rel='noreferrer noopener'
						>
							<BsMessenger />
						</a>
						<a
							href='https://wa.me/+821066952129'
							target='_blank'
							rel='noreferrer noopener'
						>
							<IoLogoWhatsapp />
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default contact;
