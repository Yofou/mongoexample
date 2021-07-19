import mongoose, { Model, Schema } from 'mongoose'

export interface PersonInterface {
    name: string;
    age: number;
    country: string;
}

const scheme = new Schema<PersonInterface>({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    country: { type: String, required: true },
})

export const Person = mongoose.model<PersonInterface, Model<PersonInterface>>( 'Person', scheme )