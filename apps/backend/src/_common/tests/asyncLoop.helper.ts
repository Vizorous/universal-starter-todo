export const asyncLoop = async <T>(
	items: T[],
	fn: (t: T) => Promise<unknown>
): Promise<void> =>
	items.reduce(async (prev, item) => {
		await prev;
		await fn(item);
	}, Promise.resolve());
