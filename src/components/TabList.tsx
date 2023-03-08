import { FC, HTMLAttributes } from 'react';
import { joinClassNames } from '../utils/joinClassNames';
import { TabElements } from '../constants/enums';
import { defaultClassNames } from '../constants/defaults';

const TabList: FC<HTMLAttributes<HTMLDivElement>> = ({ role, children, className, ...rest }) => {
	const classNames = joinClassNames(defaultClassNames.tabList, className);
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
