import { TabElements } from 'HOC/withTabs';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

const TabList: FC<PropsWithChildren<HTMLAttributes<HTMLUListElement>>> = ({ children, ...rest }) => {
	return <ul {...rest}>{children}</ul>;
};

TabList.defaultProps = {
	role: TabElements.tabList,
};

export { TabList };
