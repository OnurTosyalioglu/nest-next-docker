echo "import { Schema, SchemaFactory } from \"@nestjs/mongoose\";
import { Document } from \"mongoose\";

export type $3Document = $3 & Document;

@Schema({
	collection: '$2',
  strict: false,
  timestamps: true,
})
export class $3 {}

export const $3Scheme = SchemaFactory.createForClass($3);" > ./src/module/$1/infrastructure/dao/$2.dao.ts
