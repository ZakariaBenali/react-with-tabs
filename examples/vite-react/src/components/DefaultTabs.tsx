import { Tab, TabList, TabPanel, Tabs } from 'react-with-tabs';

const DefaultTabs = () => {
	return (
		<Tabs>
			<TabList>
				<Tab>Tab 1</Tab>
				<Tab>Tab 2</Tab>
			</TabList>
			<TabPanel>Tab content 1</TabPanel>
			<TabPanel>Tab content 2</TabPanel>
		</Tabs>
	);
};

export { DefaultTabs };
