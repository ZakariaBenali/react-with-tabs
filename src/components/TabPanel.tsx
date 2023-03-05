import { TabElements } from '../HOC/withTabs';
import { FC, HTMLAttributes } from 'react';
import { joinClassNames } from '../helpers/joinClassNames';

const TabPanel: FC<HTMLAttributes<HTMLDivElement>> = ({ role, children, className, ...rest }) => {
	const classNames = joinClassNames('_react_Tab_Panel', className);
	return (
		<div className={classNames} {...rest}>
			{children}
		</div>
	);
};

TabPanel.defaultProps = {
	role: TabElements.tabPanel,
};

export { TabPanel };
