import { CustomTabs } from './components/CustomTabs';
import { DefaultTabs } from './components/DefaultTabs';

function App() {
	return (
		<div className="App">
			<h1>React with tabs</h1>
			<h3>Using built-in components with built-in classes:</h3>
			<DefaultTabs />
			<h3>Using withTabs HOC for Custom tabs:</h3>
			<CustomTabs />
		</div>
	);
}

export { App };
