import { FilterableField, FilterableFieldOptions } from "@vizorous/nestjs-query-graphql";
import CF, { CFOptions } from "./CF";

/**
 * @description
 * Options for the {@link CFF} decorator.
 * @property {@link ReturnTypeFunc} gqlType - The graphql type of the field. Defaults to basic typescript type. For custom types use `() => CustomType`.
 * @property {boolean} nullable - Whether the field is nullable. Defaults to false.
 * @property {string} description - The description of the field.
 * @property {@link ColumnOptions} columnOptions - The options for the typeorm column.
 * @property {@link ExposeOptions} exposeOptions - The options for the class-transformer expose.
 * @property {@link FilterableFieldOptions} fieldOptions - The options for the graphql field.
 */
export interface CFFOptions extends CFOptions {
	fieldOptions?: FilterableFieldOptions;
}

/**
 * 	 CF is a custom decorator which stands for Column Filterable Field.
It combines {@link Column}, {@link FilterableField} and {@link Expose} decorators. You cannot filter todos by this field.
 * @param {CFFOptions} options {@link CFFOptions}  for the decorator.
 * @param CustomFieldDecorator - The custom decorator to use for the field.
 */
export default function CFF(options?: CFFOptions) {
	return CF(options, FilterableField);
}
