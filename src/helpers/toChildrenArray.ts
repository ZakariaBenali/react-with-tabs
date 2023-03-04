import React from 'react';

export function toChildrenArray(children: React.ReactNode) {
	if (Array.isArray(children)) {
		return children;
	} else {
		return React.Children.toArray(children);
	}
}
