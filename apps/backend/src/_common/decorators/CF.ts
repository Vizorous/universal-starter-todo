import { Field, FieldOptions, ReturnTypeFunc } from "@nestjs/graphql";
import { Expose, ExposeOptions } from "class-transformer";
import { Column, ColumnOptions } from "typeorm";

/**
 * @description
 * Options for the {@link CF} decorator.
 * @property {@link ReturnTypeFunc} gqlType - The graphql type of the field. Defaults to basic typescript type. For custom types use `() => CustomType`.
 * @property {boolean} nullable - Whether the field is nullable. Defaults to false.
 * @property {string} description - The description of the field.
 * @property {@link ColumnOptions} columnOptions - The options for the typeorm column.
 * @property {@link ExposeOptions} exposeOptions - The options for the class-transformer expose.
 * @property {@link FieldOptions} fieldOptions - The options for the graphql field.
 */
export interface CFOptions {
	gqlType?: ReturnTypeFunc;
	nullable?: boolean;
	description?: string;
	fieldOptions?: FieldOptions;
	columnOptions?: ColumnOptions;
	exposeOptions?: ExposeOptions;
}
/**
 * 	 CF is a custom decorator which stands for Column Field.
It combines {@link Column}, {@link Field} and {@link Expose} decorators. You cannot filter todos by this field.
 * @param {CFOptions} options {@link CFOptions}  for the decorator.
 * @param CustomFieldDecorator - The custom decorator to use for the field.
 */
export default function CF(options?: CFOptions, CustomFieldDecorator: typeof Field = Field): any {
	let columnFn = Column();
	let fieldFn = CustomFieldDecorator();
	let exposeFn = Expose({ toClassOnly: true });
	if (options) {
		let { nullable, description, fieldOptions, columnOptions, gqlType } = options;
		const fieldData: FieldOptions = { nullable, ...fieldOptions, description };
		fieldFn = gqlType ? CustomFieldDecorator(gqlType, { ...fieldData }) : CustomFieldDecorator(fieldData);
		// const typeValue = gqlType && gqlType();
		columnFn = Column({
			// type: columnOptions?.enum ? String : columnOptions?.type ?? typeValue,
			nullable,
			...columnOptions,
		} as ColumnOptions);
		exposeFn = Expose({ toClassOnly: true, ...options?.exposeOptions });
	}

	return (target: Object, propertyKey: string | symbol) => {
		fieldFn(target, propertyKey);
		columnFn(target, propertyKey);
		exposeFn(target, propertyKey);
	};
}
