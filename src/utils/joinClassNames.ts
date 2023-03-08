export function joinClassNames(cls1?: string, cls2?: string) {
	if (!cls1) {
		return cls2;
	}

	if (!cls2) {
		return cls1;
	}

	return `${cls1} ${cls2}`;
}
