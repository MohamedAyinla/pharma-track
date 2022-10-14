import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Wrapper from './views';
import Home from './views/Home';
import Search from './views/Search';

import {AnimatePresence} from 'framer-motion'
import Urgencies from './views/Urgencies';
import Profile from './views/Profile';
import Splash from './views/Splash';

function App() {
	const [status, setStatus] = useState(false);
	const location = useLocation()
	useEffect(() => {
		setTimeout(() => {
			setStatus(true);
		}, 2000);
	}, []);
	return status ? (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Wrapper />}>
					<Route index element={<Home />} />
					<Route path='search' element={<Search />} />
					<Route path='urgencies' element={<Urgencies />} />
					<Route path='profile' element={<Profile />} />
				</Route>
			</Routes>
		</AnimatePresence>
	) : (
		<Splash />
	);
}

export default App;
