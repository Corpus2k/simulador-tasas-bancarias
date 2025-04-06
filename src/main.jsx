import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import { StateDataContext } from './contexts/StateDataContext.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<StateDataContext>
			<App />
		</StateDataContext>
	</StrictMode>
);
