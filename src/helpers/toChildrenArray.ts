import { Children, ReactElement, ReactNode, isValidElement } from 'react';

export function toChildrenArray(children: ReactNode) {
	const childrenArray: ReactElement[] = Array.isArray(children) ? children : Children.toArray(children);
	const result: ReactElement[] = [];

	for (let i = 0; i < childrenArray.length; i++) {
		const curr = childrenArray[i];
		if (Array.isArray(curr)) {
			for (let j = 0; j < curr.length; j++) {
				const child = curr[j];
				if (isValidElement(child)) {
					result.push(child);
				}
			}
		} else if (isValidElement(curr)) {
			result.push(curr);
		}
	}

	return result;
}
