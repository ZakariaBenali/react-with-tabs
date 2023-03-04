import { withTabs } from 'HOC/withTabs';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

const TabsComponent: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({ children, ...rest }) => {
	return <div {...rest}>{children}</div>;
};

export const Tabs = withTabs(TabsComponent);
