export function applyMixins<T extends Function, U extends Function>(
	derivedCtor: T,
	constructors: U[]
) {
	constructors.forEach((baseCtor) => {
		Object.getOwnPropertyNames(baseCtor?.prototype).forEach((name) => {
			Object.defineProperty(
				derivedCtor.prototype,
				name,
				Object.getOwnPropertyDescriptor(baseCtor?.prototype, name) ||
					Object.create(null)
			);
		});
	});
}
