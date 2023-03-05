import { TabElements } from '../HOC/withTabs';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { joinClassNames } from '../helpers/joinClassNames';

const TabList: FC<PropsWithChildren<HTMLAttributes<HTMLUListElement>>> = ({ children, className, ...rest }) => {
	const classNames = joinClassNames('_react_Tab_List', className);
	return (
		<ul className={classNames} {...rest}>
			{children}
		</ul>
	);
};

TabList.defaultProps = {
	role: TabElements.tabList,
};

export { TabList };
