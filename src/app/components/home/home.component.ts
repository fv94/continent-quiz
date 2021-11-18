import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as UserActions from '../../actions/user.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nameForm = new FormGroup({});
  playerName = new FormControl(null, [Validators.required]);

  gameStarted = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.prepareForm();
  }

  prepareForm() {
    this.nameForm.addControl('playerName', this.playerName);
  }

  startGame() {
    this.store.dispatch(
      new UserActions.AddUser(this.nameForm.value.playerName)
    );
    this.gameStarted = true;
  }
}
