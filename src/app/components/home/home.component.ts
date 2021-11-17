import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nameForm = new FormGroup({});
  playerName = new FormControl(null, [Validators.required]);

  gameStarted = true;

  constructor() {}

  ngOnInit(): void {
    this.prepareForm();
  }

  prepareForm() {
    this.nameForm.addControl('playerName', this.playerName);
  }

  startGame() {
    // this.store.dispatch(new UserActions.AddUser(this.nameForm.value.playerName));
    this.gameStarted = true;
  }
}
