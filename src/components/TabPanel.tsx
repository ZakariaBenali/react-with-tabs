import { FC, HTMLAttributes } from 'react';
import { joinClassNames } from '../utils/joinClassNames';
import { TabElements } from '../constants/enums';
import { defaultClassNames } from '../constants/defaults';

const TabPanel: FC<HTMLAttributes<HTMLDivElement>> = ({ role, children, className, ...rest }) => {
	const classNames = joinClassNames(defaultClassNames.tabPanel, className);
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
