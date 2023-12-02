import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PaymentDocument = Payment & Document;

@Schema({
	collection: 'payment',
  strict: false,
  timestamps: true,
})
export class Payment {}

export const PaymentScheme = SchemaFactory.createForClass(Payment);
