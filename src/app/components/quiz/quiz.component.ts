import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { ContinentNames } from 'src/app/enums/continent-names.enum';
import { Continent } from 'src/app/models/continent.model';
import { Answer } from 'src/app/models/answer.model';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  progress = 0;
  questionNumber = 1;
  score = 0;
  gameInProgress = true;
  playerName: 'Filip';
  endMessage: string;
  isShuffled = false;
  questions: Observable<any[]>;
  continents: Continent[] = [
    { name: ContinentNames.AFRICA },
    { name: ContinentNames.ANTARCTICA },
    { name: ContinentNames.ASIA },
    { name: ContinentNames.EUROPE },
    { name: ContinentNames.NORTH_AMERICA },
    { name: ContinentNames.SOUTH_AMERICA },
    { name: ContinentNames.OCEANIA },
  ];

  user$: Observable<string>;

  constructor(
    private quizService: QuizService,
    private store: Store<AppState>
  ) {
    this.user$ = store.select('user');
  }

  ngOnInit(): void {
    this.questions = this.quizService.getQuestions().pipe(
      map((item) => this.shuffle(item.questions).slice(0, 5)),
      shareReplay(1)
    );
  }

  scoreToMessage(name: string) {
    return this.score <= 750
      ? `Come on ${name}, you can do it better!`
      : this.score > 750 && this.score <= 2250
      ? `Not bad ${name}!`
      : `Hey ${name}, you didn't tell me you are some kind of a genius!`;
  }

  selectAnswers(rightAnswer: ContinentNames) {
    let answers = [{ name: rightAnswer, isRight: true, isSelected: false }];
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
    answers.push(wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)]);
    wrongAnswers = wrongAnswers.filter(
      (continent) => continent.name !== answers[1].name
    );
    answers.push(wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)]);
    return this.shuffle(answers);
  }

  shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  submitAnswer(isRight: boolean) {
    if (isRight) {
      this.score = this.score + 750;
    }
    if (this.questionNumber === 5) {
      this.endGame();
    } else {
      this.pushQuestionAndProgress();
    }
  }

  pushQuestionAndProgress() {
    this.questionNumber++;
    this.progress = (this.questionNumber - 1) * 20;
  }

  endGame() {
    this.gameInProgress = false;
  }
}
