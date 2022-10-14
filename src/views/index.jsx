import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/global/Navbar';
import { motion } from 'framer-motion';

function Wrapper() {
	return (
		<div className='container relative border pb-20'>
			<motion.main
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				exit={{
					opacity: 0,
					transition: {
						duration: 0.1,
					},
				}}
			>
				<Outlet />
			</motion.main>
			<Navbar />
		</div>
	);
}

export default Wrapper;
