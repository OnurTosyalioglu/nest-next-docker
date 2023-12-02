import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SettingsDocument = Settings & Document;

@Schema({
	collection: 'settings',
  strict: false,
  timestamps: true,
})
export class Settings {}

export const SettingsScheme = SchemaFactory.createForClass(Settings);
