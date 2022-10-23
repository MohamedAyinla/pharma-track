import React from 'react';
import Header from '../components/global/Header';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router';
import InputField from '../components/forms/InputField';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loggedIn } from '../redux/slices/logSlice';
import { setUser } from '../redux/slices/userSlice';

function Login() {
	let navigate = useNavigate();
	const dispatch = useDispatch();

	function handleSubmit() {
		dispatch(loggedIn());
		dispatch(
			setUser({
				firstname: 'John',
				lastname: 'Doe',
			}),
		);
		navigate('/', { replace: true });
	}
	return (
		<div className='container relative border'>
			<Header>
				<section className='space-y-7'>
					<h1 className='text-3xl font-bold'>Connectez-vous !</h1>

					<div
						onClick={() => {
							navigate('/', { repalce: true });
						}}
						className='flex gap-2 items-center cursor-pointer max-w-fit'
					>
						<ChevronLeftIcon className='w-4 h-4' />
						<p>Retour</p>
					</div>
				</section>
			</Header>

			<section className='mt-16'>
				<form onSubmit={handleSubmit} className='space-y-5'>
					<div>
						<label className='mb-3 block font-medium text-sm' htmlFor='email'>
							Email
						</label>
						<InputField
							border={true}
							placeholder='example@gmail.com'
							id='email'
							name={'email'}
							type={'email'}
							leftIcon={<EnvelopeIcon className='h-5 w-5 cursor-pointer' />}
						/>
					</div>
					<div>
						<label
							className='mb-3 block font-medium text-sm'
							htmlFor='password'
						>
							Mot de passe
						</label>
						<InputField
							border={true}
							placeholder='***********'
							id='password'
							name={'password'}
							type={'password'}
							leftIcon={<LockClosedIcon className='h-5 w-5 cursor-pointer' />}
						/>
					</div>

					<div className='flex justify-between items-center'>
						<div></div>
						<p className='text-sm cursor-pointer'>Mot de passe oublié ?</p>
					</div>

					<div className='mx-auto max-w-fit'>
						<button
							type='submit'
							className='px-4 py-3 rounded-lg transition duration-300 bg-primary hover:bg-green-800 font-medium text-white text-sm'
						>
							Se connecter
						</button>
					</div>
				</form>

				<p className='text-center mt-10'>
					<Link className='font-medium text-sm ' to={'/register'}>
						Pas de compte ? Créez-en un !
					</Link>
				</p>
			</section>
		</div>
	);
}

export default Login;
