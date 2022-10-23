import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import InputField from './../components/forms/InputField';

import Image1 from '../images/icons/pharmacie.png'
import Image2 from '../images/icons/bx-calendar-star.png';
import Image3 from '../images/icons/appel-durgence.png';
import PharmaSmall from '../components/cards/PharmaSmall';
import Header from '../components/global/Header';
import { motion } from 'framer-motion';
import { Pharmacies } from '../data/pharma';

const list = {
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.3,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
};



const FilterCard = [
	{
		label: 'Pharmacies de garde',
		img: Image1,
		color: 'bg-[#DFF5E2]',
		tag: 'garde',
	},
	{
		label: 'Pharmacies de référence',
		img: Image2,
		color: 'bg-[#DFE9F5]',
		tag: 'refer',
	},
	{
		label: "Numéros d'urgence",
		img: Image3,
		color: 'bg-[#F5EADF]',
		tag: 'urgencies',
	},
];


function Home() {
	return (
		<div className='space-y-5'>
			<Header>
				<section className=''>
					<h1 className='text-3xl font-bold'>Bonjour 👋</h1>
				</section>
			</Header>

			<section>
				<InputField
					placeholder='Rechercher une pharmacie, un numéro etc..'
					id='search'
					name={'search'}
					type={'text'}
					rightIcon={<MagnifyingGlassIcon className='h-5 w-5 cursor-pointer' />}
				/>
			</section>

			<section>
				<Swiper
					spaceBetween={20}
					slidesPerView={'auto'}
					freeMode={true}
					modules={[FreeMode]}
				>
					{FilterCard.map((el, i) => (
						<SwiperSlide key={i}>
							<div className={`filter_card ${el.color}`}>
								<img
									src={el.img}
									className='w-6 absolute top-3 right-3'
									alt=''
								/>
								<h4 className='w-5/6'>{el.label}</h4>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>

			<section>
				<h3 className='mb-5'>Pharmacies à proximité</h3>
				<motion.div
					initial='hidden'
					animate='visible'
					variants={list}
					className='grid grid-cols-1 gap-3'
				>
					{Pharmacies.sort((a, b) => a.position - b.position).map((el) => (
						<PharmaSmall
							key={el.id}
							element={el}
						/>
					))}
				</motion.div>
			</section>
		</div>
	);
}

export default Home;
