import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function MapContainer() {
	return (
        <Map
            
			google={window.google}
			zoom={14}
			style={{
				width: '100%',
				height: '100%',
			}}
            
			initialCenter={{ lat: 47.444, lng: -122.176 }}
		/>
	);
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBlKFpVyBHMlRU8_YW25evCJCuRhymiR2A',
})(MapContainer);
