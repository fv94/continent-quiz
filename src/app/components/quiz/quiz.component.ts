import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { ContinentNames } from 'src/app/enums/continent-names.enum';
import { Continent } from 'src/app/models/continent.model';
import { Answer } from 'src/app/models/answer.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  progress = 0;
  questionNumber = 1;
  continents: Continent[] = [
    { name: ContinentNames.AFRICA },
    { name: ContinentNames.ANTARCTICA },
    { name: ContinentNames.ASIA },
    { name: ContinentNames.EUROPE },
    { name: ContinentNames.NORTH_AMERICA },
    { name: ContinentNames.SOUTH_AMERICA },
    { name: ContinentNames.OCEANIA },
  ];

  answers: Answer[];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getQuestions().subscribe((res) => {
      console.log(res);
    });
    this.selectAnswers(ContinentNames.SOUTH_AMERICA);
  }

  pushQuestionAndProgress() {
    this.questionNumber++;
    this.progress = (this.questionNumber - 1) * 20;
  }

  selectAnswers(rightAnswer: ContinentNames) {
    this.answers = [{ name: rightAnswer, isRight: true, isSelected: false }];
    let wrongAnswers = this.continents
      .filter((continent) => continent.name !== rightAnswer)
      .map(
        (continent) =>
          ({
            name: continent.name,
            isRight: false,
            isSelected: false,
          } as Answer)
      );
    this.answers.push(
      wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)]
    );
    wrongAnswers = wrongAnswers.filter(
      (continent) => continent.name !== this.answers[1].name
    );
    this.answers.push(
      wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)]
    );
    this.shuffle(this.answers);
  }

  shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  submitAnswer() {}
}
