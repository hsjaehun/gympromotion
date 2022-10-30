import Header from "../../components/Header";
import HeaderImage from "../../assets/images/header_bg_1.jpg";
import StoryImage from "../../assets/images/about1.jpg";
import VisionImage from "../../assets/images/about2.jpg";
import MissionImage from "../../assets/images/about3.jpg";
import "./About.css";

const About = () => {
	return (
		<>
			<Header title='About us' image={HeaderImage}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
				quis doloribus dolores est? Molestiae ullam cumque numquam non,
				iusto ex!
			</Header>

			<section className='about__story'>
				<div className='container about__story-container'>
					<div className='about__section-image'>
						<img src={StoryImage} alt='Our Story Image' />
					</div>
					<div className='about__section-content'>
						<h1>Our Story</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Autem aspernatur voluptas accusantium dolorum iure, illum
							exercitationem a quam similique ut cupiditate architecto
							eligendi rerum libero aut tempora ad id fugiat.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Fugiat hic quod exercitationem aliquam, eius recusandae
							quasi dolores commodi maxime expedita quibusdam officiis
							odio, nobis ea dolore. Numquam cupiditate vitae qui.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Fugiat hic quod exercitationem aliquam, eius recusandae
							quasi dolores commodi maxime expedita quibusdam officiis
							odio, nobis ea dolore. Numquam cupiditate vitae qui.
						</p>
					</div>
				</div>
			</section>
			<section className='about__vision'>
				<div className='container about__vision-container'>
					<div className='about__section-content'>
						<h1>Our Vision</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Autem aspernatur voluptas accusantium dolorum iure, illum
							exercitationem a quam similique ut cupiditate architecto
							eligendi rerum libero aut tempora ad id fugiat.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Fugiat hic quod exercitationem aliquam, eius recusandae
							quasi dolores commodi maxime expedita quibusdam officiis
							odio, nobis ea dolore. Numquam cupiditate vitae qui.
						</p>
					</div>
					<div className='about__section-image'>
						<img src={VisionImage} alt='Our Vision Image' />
					</div>
				</div>
			</section>

			<section className='about__mission'>
				<div className='container about__mission-container'>
					<div className='about__section-image'>
						<img src={MissionImage} alt='Our Vision Image' />
					</div>
					<div className='about__section-content'>
						<h1>Our Mission</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Autem aspernatur voluptas accusantium dolorum iure, illum
							exercitationem a quam similique ut cupiditate architecto
							eligendi rerum libero aut tempora ad id fugiat.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Fugiat hic quod exercitationem aliquam, eius recusandae
							quasi dolores commodi maxime expedita quibusdam officiis
							odio, nobis ea dolore. Numquam cupiditate vitae qui.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
