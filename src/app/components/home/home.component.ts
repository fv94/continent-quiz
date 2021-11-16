import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getQuestions().subscribe((res) => {
      console.log(res);
    });
  }
}
