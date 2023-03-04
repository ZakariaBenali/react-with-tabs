import { toChildrenArray } from 'helpers/toChildrenArray';
import React, { cloneElement, useState } from 'react';

export interface WithTabsProps {
	children: React.ReactNode;
}

export enum TabElements {
	tabList = 'tabs',
	tab = 'tab',
	tabPanel = 'tab-panel',
}

const withTabs = <T extends WithTabsProps>(WrappedComponent: React.ComponentType<T>) => {
	return (props: T) => {
		const [currentIndex, setCurrentIndex] = useState(0);
		const children = props.children;
		const _children = toChildrenArray(children).map((child, i) => {
			const role = child.props.role;
			if (role === TabElements.tabList) {
				const tabs = child.props.children;
				return cloneElement(child, {
					key: i,
					children: toChildrenArray(tabs).map((tab, j) => {
						const tabRole = tab.props.role;
						if (tabRole === TabElements.tab) {
							return cloneElement(tab, {
								index: j,
								key: j,
								onClick: () => {
									setCurrentIndex(j);
								},
							});
						}
						return null;
					}),
				});
			}
			if (currentIndex + 1 === i && role === TabElements.tabPanel) {
				return cloneElement(child, {
					index: i,
					key: i,
				});
			}
			return null;
		});
		return <WrappedComponent {...props}>{_children}</WrappedComponent>;
	};
};

export { withTabs };
