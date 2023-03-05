import { TabElements } from '../HOC/withTabs';
import { FC, HTMLAttributes } from 'react';
import { joinClassNames } from '../helpers/joinClassNames';

const TabList: FC<HTMLAttributes<HTMLDivElement>> = ({ role, children, className, ...rest }) => {
	const classNames = joinClassNames('_react_Tab_List', className);
	return (
		<div role={TabElements.tabList} className={classNames} {...rest}>
			{children}
		</div>
	);
};

export { TabList };
