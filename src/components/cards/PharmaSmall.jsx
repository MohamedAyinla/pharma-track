import React from 'react'
import { motion } from 'framer-motion';
const item = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: -10 },
};
function PharmaSmall({status, name, city, region, refer, position, garde}) {
  return (
		<motion.div
			variants={item}
			transition={{
				default: {
					duration: 0.2,
					ease: [0, 0.71, 0.2, 1.01],
				},
				y: {
					type: 'spring',
					damping: 5,
					stiffness: 100,
					restDelta: 0.001,
				},
			}}
			className={`w-full p-4 rounded-xl space-y-4 ${
				!status
					? 'bg-[#FFF5FB]'
					: status && garde
					? 'bg-[#F5FFF6]'
					: 'bg-[#F5F6FF]'
			}`}
		>
			<div className='flex justify-between items-center'>
				<div>
					<h4>{name}</h4>
					<p className='small_text'>
						{city}, {region} SN
					</p>
				</div>
				{garde && (
					<p className='font-semibold text-xs text-primary'>De garde</p>
				)}
			</div>

			<div className='flex justify-between items-end'>
				{status ? (
					<p className='text-primary font-bold text-sm'>Ouverte</p>
				) : (
					<p className='text-[#C5414A] font-bold text-sm'>Fermée</p>
				)}{' '}
				<p className='text-lg font-medium'>... {position}km</p>
			</div>
		</motion.div>
	);
}

export default PharmaSmall