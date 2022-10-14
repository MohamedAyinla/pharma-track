import React from 'react';

function InputField({ type, id, name, placeholder, leftIcon, rightIcon, value, onChange }) {
	return (
		<div className='relative rounded-xl shadow-sm'>
			{{ leftIcon } && (
				<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
					{leftIcon}
				</div>
			)}
			<input
				value={value}
				onChange={onChange}
				type={type}
				name={name}
				id={id}
				className={`block w-full bg-gray-50 rounded-xl border-gray-50 ${
					leftIcon ? 'pl-11' : 'pl-5'
				} ${
					rightIcon ? 'pr-12' : 'pr-5'
				} pr-12 py-3 focus:border-gray-100 focus:ring-0 text-sm`}
				placeholder={placeholder}
			/>
			{rightIcon && (
				<div className='absolute inset-y-0 right-0 flex items-center mr-5'>
					{rightIcon}
				</div>
			)}
		</div>
	);
}

export default InputField;
