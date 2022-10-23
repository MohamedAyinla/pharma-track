import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

import Wrapper from './views';
import Home from './views/Home';
import Search from './views/Search';

import { AnimatePresence } from 'framer-motion';
import Urgencies from './views/Urgencies';
import Profile from './views/Profile';
import Splash from './views/Splash';
import ScrollToTop from './components/global/ScrollToTop';
import DetailPharma from './views/DetailPharma';
import DetailUrgence from './views/DetailUrgence';
import { useSelector } from 'react-redux';
import { selectLogged } from './redux/slices/logSlice';
import Login from './views/Login';
import Register from './views/Register';
import Command from './views/Command';

const ProtectedRoute = ({ children }) => {
	let log = useSelector(selectLogged);
	if (!log) {
		return <Navigate to='/login' />;
	}
	return children;
};

// const EnterRoute = ({ children }) => {
// 	let log = useSelector(selectLogged);
// 	if (log) {
// 		return <Navigate to='/' />;
// 	}
// 	return children;
// };

function App() {
	const [status, setStatus] = useState(false);
	const location = useLocation();
	useEffect(() => {
		setTimeout(() => {
			setStatus(true);
		}, 2000);
	}, []);
	return status ? (
		<AnimatePresence mode='wait'>
			<ScrollToTop>
				<Routes location={location} key={location.pathname}>
					<Route path='/' element={<Wrapper />}>
						<Route index element={<Home />} />
						<Route path='pharmacies/:id' element={<DetailPharma />} />
						<Route path='search' element={<Search />} />
						<Route path='urgencies' element={<Urgencies />} />
						<Route path='urgencies/:id' element={<DetailUrgence />} />
						<Route
							path='command'
							element={
								<ProtectedRoute>
									<Command />{' '}
								</ProtectedRoute>
							}
						/>
						<Route
							path='profile'
							element={
								<ProtectedRoute>
									<Profile />
								</ProtectedRoute>
							}
						/>
					</Route>

					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Routes>
			</ScrollToTop>
		</AnimatePresence>
	) : (
		<Splash />
	);
}

export default App;
