import { TabElements } from '../HOC/withTabs';
import { ButtonHTMLAttributes, FC } from 'react';
import { joinClassNames } from '../helpers/joinClassNames';

const Tab: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ role, className, children, ...props }) => {
	const classNames = joinClassNames('_react_Tab', className);
	return (
		<button className={classNames} {...props}>
			{children}
		</button>
	);
};

Tab.defaultProps = {
	type: 'button',
	role: TabElements.tab,
};

export { Tab };
