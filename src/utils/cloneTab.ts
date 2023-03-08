import { cloneElement } from 'react';
import { joinClassNames } from './joinClassNames';
import { TabElements } from '../constants/enums';

export const cloneTab = (
	tab: React.ReactElement,
	index: number,
	handleClick: () => void,
	selectedClassName?: string,
): React.ReactNode => {
	const tabRole = tab.props.role;
	const tabClassName = tab.props.className;
	if (tabRole === TabElements.tab) {
		return cloneElement(tab, {
			key: index,
			className: joinClassNames(selectedClassName, tabClassName),
			onClick: (e: any) => {
				if (tab.props.onClick) {
					tab.props.onClick(e);
				}
				handleClick();
			},
		});
	}

	return tab;
};
