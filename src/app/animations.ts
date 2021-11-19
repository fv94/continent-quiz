import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

export let answered = trigger('answered', [
  state('nothing', style({})),
  state(
    'rightAnswer',
    style({ backgroundColor: 'green', color: 'white', borderColor: 'green' })
  ),
  state(
    'wrongAnswer',
    style({ backgroundColor: 'red', color: 'white', borderColor: 'red' })
  ),
  transition('nothing => rightAnswer', [animate('1s')]),
  transition('nothing => wrongAnswer', [animate('1s')]),
]);
