import React from 'react';


function Header({ children }) {
	return (
		<div className='py-5 sticky top-0 z-30 bg-white sm:hidden'>
			<header className='mb-6'>
				<p className='text-center font-bold text-gray-200'>PharmaTrack</p>
			</header>

			{children}
		</div>
	);
}

export default Header;
