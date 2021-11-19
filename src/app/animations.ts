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
  transition('nothing => rightAnswer', [animate('2s')]),
  transition('nothing => wrongAnswer', [animate('2s')]),
]);
