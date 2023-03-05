import { TabElements } from '../HOC/withTabs';
import { ButtonHTMLAttributes, FC } from 'react';
import { joinClassNames } from '../helpers/joinClassNames';

const Tab: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ role, className, children, ...props }) => {
	const classNames = joinClassNames('_react_Tab', className);
	return (
		<button role={TabElements.tab} className={classNames} {...props}>
			{children}
		</button>
	);
};

Tab.defaultProps = {
	type: 'button',
};

export { Tab };
