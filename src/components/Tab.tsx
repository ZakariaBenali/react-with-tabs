import { TabElements } from '../HOC/withTabs';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';

const Tab: FC<PropsWithChildren<HTMLAttributes<HTMLButtonElement>>> = ({ role, children, ...props }) => {
	return <button {...props}>{children}</button>;
};

Tab.defaultProps = {
	role: TabElements.tab,
};

export { Tab };
