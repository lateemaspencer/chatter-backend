import { Prop, Schema } from "@nestjs/mongoose";
import { SchemaTypes, Types } from "mongoose";

// This represents the base mongo document
// _id is the field every mongo document will have
// ensures all other schemas extending it have
// properly defined and typed _id field
@Schema()
export class AbstractDocument {
	@Prop({ type: SchemaTypes.ObjectId })
	// SchemaType is a configuration object for an individual property
	// says what type a given path should have,
	// whether is has any getters/setters, and what values are valid
	// for that path

	_id: Types.ObjectId;

	// Types: Contains the actual TypeScript types and utility
	// functions for working with Mongoose objects
	// eg Types.ObjectId is the actual type for the MongoDB
	// _id value
}

/*
To define a property of type ObjectId,
you should use Types.ObjectId
in the TypeScript document interface
*/
