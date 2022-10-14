import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Header from './../components/global/Header';
import { motion } from 'framer-motion';

const list = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
};

const item = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: -100 },
};

function Profile() {
	return (
		<div className='space-y-10'>
			<Header>
				<section className=''>
					<h1 className='text-3xl font-bold'>Profil</h1>
				</section>
			</Header>

			<section className='text-center'>
				<h3>John Doe</h3>
				<p className='text-[15px]'>johndoe@gmail.com</p>
			</section>

			<section className=''>
				<motion.ul
					initial='hidden'
					animate='visible'
					variants={list}
					className='space-y-5'
				>
					<motion.li
						variants={item}
						whileHover={{ scale: 1.01 }}
						whileTap={{ scale: 0.99 }}
						className='font-medium flex justify-between items-center cursor-pointer'
					>
						Mes informations générales <ChevronRightIcon className='w-5 h-5' />
					</motion.li>
					<motion.li
						variants={item}
						whileHover={{ scale: 1.01 }}
						whileTap={{ scale: 0.99 }}
						className='font-medium flex justify-between items-center cursor-pointer'
					>
						Mes commandes <ChevronRightIcon className='w-5 h-5' />
					</motion.li>
					<motion.li
						variants={item}
						whileHover={{ scale: 1.01 }}
						whileTap={{ scale: 0.99 }}
						className='font-medium flex justify-between items-center cursor-pointer'
					>
						Mes adresses <ChevronRightIcon className='w-5 h-5' />
					</motion.li>
					<motion.li
						variants={item}
						whileHover={{ scale: 1.01 }}
						whileTap={{ scale: 0.99 }}
						className='font-medium flex justify-between items-center cursor-pointer'
					>
						Comptes financiers <ChevronRightIcon className='w-5 h-5' />
					</motion.li>
					<motion.li
						variants={item}
						whileHover={{ scale: 1.01 }}
						whileTap={{ scale: 0.99 }}
						className='font-medium flex justify-between items-center cursor-pointer'
					>
						Déconnexion
					</motion.li>
				</motion.ul>
			</section>
		</div>
	);
}

export default Profile;