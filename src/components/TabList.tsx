import { TabElements } from '../HOC/withTabs';
import { FC, HTMLAttributes } from 'react';
import { joinClassNames } from '../helpers/joinClassNames';

const TabList: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...rest }) => {
	const classNames = joinClassNames('_react_Tab_List', className);
	return (
		<div className={classNames} {...rest}>
			{children}
		</div>
	);
};

TabList.defaultProps = {
	role: TabElements.tabList,
};

export { TabList };
