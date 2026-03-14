import { Field, Int, ObjectType } from "@nestjs/graphql";

// Tells graphql this is part of our schema
@ObjectType()
export class User {
	@Field(() => Int, { description: "Example field (placeholder)" })
	exampleField: number;
}
