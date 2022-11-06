import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import InputField from './../components/forms/InputField';

import Image1 from '../images/icons/pharmacie.png';
import Image2 from '../images/icons/bx-calendar-star.png';
import Image3 from '../images/icons/appel-durgence.png';
import PharmaSmall from '../components/cards/PharmaSmall';
import Header from '../components/global/Header';
import { motion } from 'framer-motion';
import { Pharmacies } from '../data/pharma';
import { useSelector } from 'react-redux';
import { selectLogged } from './../redux/slices/logSlice';
import { getUser } from './../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const apiURL = 'https://ipgeolocation.abstractapi.com/v1/';
const apiKey = '46cf9e5e0f4840dcb99fb0354dfad0b4';

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

function Home() {
	let navigate = useNavigate();
	let log = useSelector(selectLogged);
	let user = useSelector(getUser);

	function salute() {
		let hour = new Date().getHours();
		if (hour <= 5) {
			return 'Nouveau jour';
		} else if (hour <= 12) {
			return 'Bonjour';
		} else if (hour <= 15) {
			return 'Bon Aprem';
		} else {
			return 'Bonsoir';
		}
	}

	return (
		<div className='space-y-5'>
			<Header>
				<section className=''>
					{log ? (
						<h1 className='text-3xl font-bold'>
							{salute()}, {user.firstname}
						</h1>
					) : (
						<h1 className='text-3xl font-bold'>Bonjour 👋</h1>
					)}
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
					<SwiperSlide>
						<div className={`filter_card bg-[#DFF5E2]`}>
							<img src={Image1} className='w-6 absolute top-3 right-3' alt='' />
							<h4 className='w-5/6'>Pharmacies de garde</h4>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className={`filter_card bg-[#DFE9F5]`}>
							<img src={Image2} className='w-6 absolute top-3 right-3' alt='' />
							<h4 className='w-5/6'>Pharmacies de référence</h4>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div
							onClick={() => navigate('/urgencies', { replace: true })}
							className={`filter_card bg-[#F5EADF]`}
						>
							<img src={Image3} className='w-6 absolute top-3 right-3' alt='' />
							<h4 className='w-5/6'>Numéros d'urgence</h4>
						</div>
					</SwiperSlide>
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
						<PharmaSmall key={el.id} element={el} />
					))}
				</motion.div>
			</section>
		</div>
	);
}

export default Home;
