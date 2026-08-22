import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './theme/global.css';
import './theme/app.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
	throw new Error('Root element #root not found');
}

createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>
);

if (import.meta.env.PROD) {
	void import('./registerSw').then((mod) => {
		void mod.registerServiceWorker();
	});
}
