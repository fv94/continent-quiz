import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss'],
})
export class ScoresComponent implements OnInit {
  @Input() scores: any[];

  constructor() {}

  ngOnInit(): void {}
}
