import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Header from '../../components/global/Header';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, removeUser } from '../../redux/slices/userSlice';
import { loggedOut, selectLogged } from '../../redux/slices/logSlice';

const list = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
};

const item = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: -100 },
};

function Profile() {
	let log = useSelector(selectLogged);
	let navigate = useNavigate()
	let dispatch = useDispatch()

	const user = useSelector(getUser)
	console.log(user)

	return (
		<div className='space-y-10'>
			<Header>
				<section className=''>
					<h1 className='text-3xl font-bold'>Profil</h1>
				</section>
			</Header>

			{user.category === 'particular' ? (
				<>
					<section className='text-center'>
						<h3>{user.fullname}</h3>
						<p className='text-[15px]'>{user.email}</p>
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
								onClick={() => navigate('/profile/generalInfo')}
							>
								Mes informations générales{' '}
								<ChevronRightIcon className='w-5 h-5' />
							</motion.li>
							{/* <motion.li
								variants={item}
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
								className='font-medium flex justify-between items-center cursor-pointer'
							>
								Mes commandes <ChevronRightIcon className='w-5 h-5' />
							</motion.li> */}
							{/* <motion.li
								variants={item}
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
								className='font-medium flex justify-between items-center cursor-pointer'
							>
								Mes adresses <ChevronRightIcon className='w-5 h-5' />
							</motion.li> */}
							{/* <motion.li
								variants={item}
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
								className='font-medium flex justify-between items-center cursor-pointer'
							>
								Comptes financiers <ChevronRightIcon className='w-5 h-5' />
							</motion.li> */}
							<motion.li
								variants={item}
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
								className='font-medium flex justify-between items-center cursor-pointer'
								onClick={() => {
									dispatch(removeUser());
									dispatch(loggedOut());
									navigate('/');
								}}
							>
								Déconnexion
							</motion.li>
						</motion.ul>
					</section>
				</>
			) : (
				<>
					<section className='text-center'>
						<h3>{user.firstname + ' ' + user.lastname}</h3>
						<p className='text-[15px]'>{user.email}</p>
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
								Informations
								<ChevronRightIcon className='w-5 h-5' />
							</motion.li>
							<motion.li
								variants={item}
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
								className='font-medium flex justify-between items-center cursor-pointer'
							>
								Horaires <ChevronRightIcon className='w-5 h-5' />
							</motion.li>
							<motion.li
								variants={item}
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
								className='font-medium flex justify-between items-center cursor-pointer'
							>
								Adresse <ChevronRightIcon className='w-5 h-5' />
							</motion.li>
							<motion.li
								variants={item}
								whileHover={{ scale: 1.01 }}
								whileTap={{ scale: 0.99 }}
								className='font-medium flex justify-between items-center cursor-pointer'
								onClick={() => {
									dispatch(removeUser());
									dispatch(loggedOut());
									navigate('/');
								}}
							>
								Déconnexion
							</motion.li>
						</motion.ul>
					</section>
				</>
			)}
		</div>
	);
}

export default Profile;
