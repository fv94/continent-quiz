import { ContinentNames } from '../enums/continent-names.enum';

export class Question {
  id: number;
  question: string;
  answer: ContinentNames;
  picture: string;
}
