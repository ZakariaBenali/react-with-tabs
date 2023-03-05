import { FC, HTMLAttributes } from 'react';
import { withTabs } from '../HOC/withTabs';

const TabsComponent: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
	return <div {...rest}>{children}</div>;
};

export const Tabs = withTabs(TabsComponent);
