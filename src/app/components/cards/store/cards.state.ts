import { Action, State, StateContext, Selector } from '@ngxs/store';
import { timer, Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

import { CardsStateModel } from './cards.state.model';
import { CallApi } from './cards.actions';

@State<CardsStateModel>({
  name: 'cards',
  defaults: {
    people: [{ id: '123', name: 'hello' }],
    name: 'string',
    gender: 'HI CONNOR',
    type: 'string',
    homeworld: 'string',
    created: 'string',
    edited: 100,
  },
})
export class CardsState {
  @Selector()
  static cards(state: CardsStateModel) {
    return state.name;
  }
  @Selector()
  static gender(state: CardsStateModel) {
    return state.gender;
  }
  @Selector()
  static character(state: CardsStateModel) {
    return state.people;
  }
  // @Action(CallApi)
  // CallApi(context: StateContext<CardsStateModel>, { payload }: CallApi) {
  //   // API CODE
  //   fetch('https://swapi.dev/api/people')
  //     .then((response) => (response.status === 200 ? response.json() : null))
  //     .then((data) => {
  //       if (!data) {
  //         return;
  //       }

  //       console.log('data.results', data.results);

  //       const state = context.getState();
  //       context.patchState({ people: data.results });
  //     })
  //     .catch((err) => console.error(err));
  // }
}
