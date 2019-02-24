import App from './App.html';

// Get data for development;
// should probably be 'fetched' in prod
import data from './data';

const app = new App({
	target: document.body,
	data: {
		categories: data.categories,	
  }
});

window.app = app;

export default app;
