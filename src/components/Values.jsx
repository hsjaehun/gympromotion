import Image from "../assets/images/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../Ui/Card";

const Values = () => {
	return (
		<section className='values'>
			<div className='container values__container'>
				<div className='values__left'>
					<div className='values__image'>
						<img src={Image} alt='Values Image' />
					</div>
				</div>
				<div className='values__right'>
					<SectionHead icon={<GiCutDiamond />} title='Values' />
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Aliquid et id incidunt doloremque quo? Eveniet voluptate
						adipisci rem reprehenderit harum, possimus eligendi quasi
						perferendis obcaecati, corrupti nihil eaque sapiente impedit!
					</p>
					<div className='values__wrapper'>
						{values.map(({ id, icon, title, desc }) => {
							return (
								<Card key={id} className='values__value'>
									<span>{icon}</span>
									<h4>{title}</h4>
									<small>{desc}</small>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Values;
