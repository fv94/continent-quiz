import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-score',
  templateUrl: './single-score.component.html',
  styleUrls: ['./single-score.component.scss'],
})
export class SingleScoreComponent implements OnInit {
  @Input() image: string;
  @Input() playerName: string;
  @Input() score: string;

  constructor() {}

  ngOnInit(): void {}
}
