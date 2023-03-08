import { ButtonHTMLAttributes, FC } from 'react';
import { joinClassNames } from '../utils/joinClassNames';
import { TabElements } from '../constants/enums';
import { defaultClassNames } from '../constants/defaults';

const Tab: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ role, className, children, ...props }) => {
	const classNames = joinClassNames(defaultClassNames.tab, className);
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
