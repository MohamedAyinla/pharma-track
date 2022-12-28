import { useRef, useEffect } from 'react';
// import './styles.css';

const AutoComplete = () => {
	const autoCompleteRef = useRef();
	const inputRef = useRef();
	const options = {
		componentRestrictions: { country: 'sn' },
		fields: ['address_components', 'geometry', 'icon', 'name'],
		types: ['establishment'],
	};
	useEffect(() => {
		autoCompleteRef.current = new window.google.maps.places.Autocomplete(
			inputRef.current,
			options,
		);
	}, []);

	return (
		<div>
			<label className='mb-3 block font-medium text-sm'>Localisation</label>
			<input
				className='block w-full bg-gray-50 outline-none rounded-lg border border-gray-500 pl-11 pr-5 pr-12 py-3 focus:border-gray-100 focus:ring-0 text-sm'
				ref={inputRef}
			/>
		</div>
	);
};
export default AutoComplete;
