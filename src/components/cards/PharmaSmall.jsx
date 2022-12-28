import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
const item = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: -10 },
};
function PharmaSmall({ element }) {
	let navigate = useNavigate()
  return (
	  <motion.div
		  onClick={() => {
			  navigate(`/pharmacies/${element.id}`, {state: {pharmacie: element}});
		  }}
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
			className={`w-full p-4 rounded-xl space-y-4 cursor-pointer ${
				!element.status
					? 'bg-[#FFF5FB]'
					: element.status && element.garde
					? 'bg-[#F5FFF6]'
					: 'bg-[#F5F6FF]'
			}`}
		>
			<div className='flex justify-between items-center'>
				<div>
					<h4>{element.name}</h4>
					<p className='small_text'>
						{element.region}, {element.city} SN
					</p>
				</div>
				{element.garde && (
					<p className='font-semibold text-xs text-primary'>De garde</p>
				)}
			</div>

			<div className='flex justify-between items-end'>
				{element.status ? (
					<p className='text-primary font-bold text-sm'>Ouverte</p>
				) : (
					<p className='text-[#C5414A] font-bold text-sm'>Fermée</p>
				)}{' '}
				<p className='text-lg font-medium'>... {element.position}km</p>
			</div>
		</motion.div>
	);
}

export default PharmaSmall