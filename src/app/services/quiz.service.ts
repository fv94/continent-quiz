import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  // Data url wasn't working on Sunday so I created .json file to replace the data
  private dataJson = 'assets/data/quiz.json';

  constructor(private httpClient: HttpClient) {}

  // Data url wasn't working on Sunday so I created .json file to replace the data
  getQuestions(): Observable<any> {
    return this.httpClient.get(this.dataJson);
  }
}
