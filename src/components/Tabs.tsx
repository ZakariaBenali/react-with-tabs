import { FC, HTMLAttributes } from 'react';
import { withTabs } from '../HOC/withTabs';
import { joinClassNames } from '../utils/joinClassNames';
import { defaultClassNames } from '../constants/defaults';

const TabsComponent: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
	const classNames = joinClassNames(defaultClassNames.tabs, className);
	return (
		<div className={classNames} {...rest}>
			{children}
		</div>
	);
};

export const Tabs = withTabs(TabsComponent);
