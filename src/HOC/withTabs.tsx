import { defaultClassNames } from '../constants/defaults';
import { TabElements } from '../constants/enums';
import { cloneTab } from '../utils/cloneTab';
import { toChildrenArray } from '../utils/toChildrenArray';
import React, { cloneElement, useState } from 'react';

export interface WithTabsProps {
	children: React.ReactNode;
	selectedClassName?: string;
}

type WrappedComponentProps<T> = T & WithTabsProps;

function withTabs<T>(WrappedComponent: React.ComponentType<T>) {
	return (props: WrappedComponentProps<T>) => {
		const { selectedClassName, children, ...rest } = props;
		const [currentIndex, setCurrentIndex] = useState(0);
		const _children = toChildrenArray(children).map((child, i) => {
			const role = child.props.role;
			if (role === TabElements.tabList) {
				const tabs = child.props.children;
				return cloneElement(child, {
					key: i,
					children: toChildrenArray(tabs).map((tab, j) => {
						const isSelected = j === currentIndex;
						const selected = isSelected ? selectedClassName ?? defaultClassNames.selected : undefined;
						return cloneTab(
							tab,
							j,
							() => {
								setCurrentIndex(j);
							},
							selected,
						);
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
		return <WrappedComponent {...(rest as WrappedComponentProps<T>)}>{_children}</WrappedComponent>;
	};
}

export { withTabs };
