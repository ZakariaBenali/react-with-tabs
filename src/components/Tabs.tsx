import { FC, HTMLAttributes } from 'react';
import { withTabs } from '../HOC/withTabs';
import { joinClassNames } from '../helpers/joinClassNames';

const TabsComponent: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
	const classNames = joinClassNames('_react_Tabs', className);
	return (
		<div className={classNames} {...rest}>
			{children}
		</div>
	);
};

export const Tabs = withTabs(TabsComponent);
