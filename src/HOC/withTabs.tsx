import { joinClassNames } from '../helpers/joinClassNames';
import { toChildrenArray } from '../helpers/toChildrenArray';
import React, { cloneElement, useState } from 'react';

export interface WithTabsProps {
	children: React.ReactNode;
	selectedClassName?: string;
}

export enum TabElements {
	tabList = 'tabs',
	tab = 'tab',
	tabPanel = 'tab-panel',
}

type WrappedComponentType<T> = T & WithTabsProps;

function withTabs<T>(WrappedComponent: React.ComponentType<T>) {
	return (props: WrappedComponentType<T>) => {
		const { selectedClassName, children, ...rest } = props;
		const [currentIndex, setCurrentIndex] = useState(0);
		const _children = toChildrenArray(children).map((child, i) => {
			const role = child.props.role;
			if (role === TabElements.tabList) {
				const tabs = child.props.children;
				return cloneElement(child, {
					key: i,
					children: toChildrenArray(tabs).map((tab, j) => {
						const tabRole = tab.props.role;
						const isSelected = j === currentIndex;
						const selectedClass = isSelected ? selectedClassName ?? '_react_Selected_Tab' : undefined;
						const tabClassName = tab.props.className;
						if (tabRole === TabElements.tab) {
							return cloneElement(tab, {
								key: j,
								className: joinClassNames(selectedClass, tabClassName),
								onClick: (e: any) => {
									if (tab.props.onClick) {
										tab.props.onClick(e);
									}
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
					key: i,
				});
			}
			return null;
		});
		return <WrappedComponent {...(rest as WrappedComponentType<T>)}>{_children}</WrappedComponent>;
	};
}

export { withTabs };
