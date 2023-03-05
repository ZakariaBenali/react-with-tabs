import { TabElements } from '../HOC/withTabs';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { joinClassNames } from '../helpers/joinClassNames';

const Tab: FC<PropsWithChildren<HTMLAttributes<HTMLButtonElement>>> = ({ role, className, children, ...props }) => {
	const classNames = joinClassNames('_react_Tab', className);
	return (
		<button className={classNames} {...props}>
			{children}
		</button>
	);
};

Tab.defaultProps = {
	role: TabElements.tab,
};

export { Tab };
