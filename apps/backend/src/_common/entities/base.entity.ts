import { Field, ID, ObjectType } from "@nestjs/graphql";
import { FilterableField, KeySet } from "@vizorous/nestjs-query-graphql";
import { Expose } from "class-transformer";
import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import IDExpose from "../decorators/ID";

@ObjectType()
@Entity()
@KeySet(["id"])
export class BaseEntity {
	@IDExpose(() => ID, { idOptions: { allowedComparisons: ["eq", "in"] } })
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@FilterableField()
	@Expose()
	@CreateDateColumn()
	createdAt: Date;

	@FilterableField()
	@Expose()
	@UpdateDateColumn()
	updatedAt: Date;

	@DeleteDateColumn()
	deletedAt: Date;
}
