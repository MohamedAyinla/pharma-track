import configDev from './config.dev'
import configStaging from './config.staging'
import configProd from './config.prod'

let config
if (import.meta.env.MODE === 'production') {
	if (process.env.REACT_APP_BACK === 'stagging') {
		config = configStaging;
	} else {
		config = configProd;
	}
} else {
	config = configDev;
}

export default config
