import React from 'react'
import { useNavigate } from 'react-router-dom';

function Urgence({ data }) {
    let navigate = useNavigate();
  return (
		<div
			onClick={() => {
				navigate(`/urgencies/${data.id}`, {
					state: { urgence: data },
				});
			}}
			className='bg-[#F5EADF6E] p-3 text-center rounded-xl space-y-3 mb-4 break-inside-avoid-column cursor-pointer'
		>
			<h4>{data.name}</h4>
			<div>
				{data.number}
			</div>
			<p className='text-xs'>{data.short}</p>
		</div>
	);
}

export default Urgence