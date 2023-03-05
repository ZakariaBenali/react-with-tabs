import { withTabs } from 'HOC/withTabs';
import { FC, HTMLAttributes } from 'react';

const TabsComponent: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
	return <div {...rest}>{children}</div>;
};

export const Tabs = withTabs(TabsComponent);
