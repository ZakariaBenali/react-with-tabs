import { TabElements } from '../HOC/withTabs';
import { FC, HTMLAttributes } from 'react';
import { joinClassNames } from '../helpers/joinClassNames';

const TabPanel: FC<HTMLAttributes<HTMLDivElement>> = ({ role, children, className, ...rest }) => {
	const classNames = joinClassNames('_react_Tab_Panel', className);
	return (
		<div role={TabElements.tabPanel} className={classNames} {...rest}>
			{children}
		</div>
	);
};

export { TabPanel };
