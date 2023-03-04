import { TabElements } from 'HOC/withTabs';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

const TabPanel: FC<PropsWithChildren<PropsWithChildren<HTMLAttributes<HTMLDivElement>>>> = ({ children, ...rest }) => {
	return <div {...rest}>{children}</div>;
};

TabPanel.defaultProps = {
	role: TabElements.tabPanel,
};

export { TabPanel };
