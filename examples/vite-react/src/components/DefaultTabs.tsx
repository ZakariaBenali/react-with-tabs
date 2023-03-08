import { Tab, TabList, TabPanel, Tabs } from 'react-with-tabs';

const data = [...Array(3)];
const DefaultTabs = () => {
	return (
		<Tabs>
			<TabList>
				{data.map((_, i) => (
					<Tab key={i}>Tab {i + 1}</Tab>
				))}
			</TabList>
			{data.map((_, i) => (
				<TabPanel key={i}>Tab content {i + 1}</TabPanel>
			))}
		</Tabs>
	);
};

export { DefaultTabs };
