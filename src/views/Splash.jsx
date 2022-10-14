import React from 'react';
import LOGO from '../images/logo.png'
import { motion } from 'framer-motion';

function Splash() {
	return (
		<motion.div className='h-screen flex justify-center items-center relative'>
			<div>
				<motion.img
					animate={{
						scale: [1, 2, 2, 1, 1],
						rotate: [0, 0, 180, 180, 0],
						borderRadius: ['0%', '0%', '50%', '50%', '0%'],
					}}
					transition={{
						duration: 1.5,
						ease: 'easeInOut',
						times: [0, 0.2, 0.5, 0.8, 1],
						repeat: Infinity,
						repeatDelay: 1,
					}}
					src={LOGO}
					alt=''
					className='w-32 h-32'
				/>
			</div>
		</motion.div>
	);
}

export default Splash;
