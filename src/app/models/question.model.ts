import { Answer } from "./answer.model";

export interface Question {
  id?: number,
  title: string,
  body: string,
  createdAt?: Date,
  updatedAt?: Date,
  Answers?: Answer[]
}