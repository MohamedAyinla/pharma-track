import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
	HomeIcon,
	MagnifyingGlassIcon,
	ShieldExclamationIcon,
	UserIcon,
} from '@heroicons/react/24/outline';
import {
	HomeIcon as Home,
	MagnifyingGlassIcon as MagnifyingGlass,
	ShieldExclamationIcon as ShieldExclamation,
	UserIcon as User,
} from '@heroicons/react/24/solid';

function Navbar() {
	let pathname = useLocation().pathname;
	return (
		<nav
			className={`fixed inset-x-0 transition-all duration-400 ${
				pathname !== '/' &&
				pathname !== '/search' &&
				pathname !== '/urgencies' &&
				pathname !== '/profile'
					? '-bottom-full'
					: 'bottom-0'
			} z-10 max-w-md mx-auto px-6 shadow h-16 bg-white flex items-center`}
		>
			<div className='grid grid-cols-4 justify-between items-center w-full'>
				<Link className='mx-auto' to={'/'}>
					<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						{pathname === '/' ? (
							<Home className='w-5 h-5 mx-auto text-primary' />
						) : (
							<HomeIcon className='w-5 h-5 mx-auto' />
						)}
						<p
							className={`text-[0.7rem] mt-1 ${
								pathname === '/' ? 'font-bold text-primary' : 'font-normal'
							}`}
						>
							Home
						</p>
					</motion.div>
				</Link>
				<Link className='mx-auto' to={'/search'}>
					<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						{pathname === '/search' ? (
							<MagnifyingGlass className='w-5 h-5 mx-auto text-primary' />
						) : (
							<MagnifyingGlassIcon className='w-5 h-5 mx-auto' />
						)}

						<p
							className={`text-[0.7rem] mt-1 ${
								pathname === '/search'
									? 'font-bold text-primary'
									: 'font-normal'
							}`}
						>
							Rechercher
						</p>
					</motion.div>
				</Link>
				<Link className='mx-auto' to={'/urgencies'}>
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className='mx-auto'
					>
						{pathname.includes('/urgencies') ? (
							<ShieldExclamation className='w-5 h-5 mx-auto text-primary' />
						) : (
							<ShieldExclamationIcon className='w-5 h-5 mx-auto' />
						)}
						<p
							className={`text-[0.7rem] mt-1 ${
								pathname.includes('/urgencies')
									? 'font-bold text-primary'
									: 'font-normal'
							}`}
						>
							Urgences
						</p>
					</motion.div>
				</Link>
				<Link className='mx-auto' to={'/profile'}>
					<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						{pathname === '/profile' ? (
							<User className='w-5 h-5 mx-auto text-primary' />
						) : (
							<UserIcon className='w-5 h-5 mx-auto' />
						)}
						<p
							className={`text-[0.7rem] mt-1 ${
								pathname === '/profile'
									? 'font-bold text-primary'
									: 'font-normal'
							}`}
						>
							Profil
						</p>
					</motion.div>
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
