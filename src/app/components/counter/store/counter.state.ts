import { Action, State, StateContext, Selector } from '@ngxs/store';
import { timer, Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { 
  Decrement, 
  Increment, 
  Initialize, 
  Override 
} from './counter.actions';
import { CounterStateModel } from './counter.state.model';



// Setting up the state (For example data() in vue)
@State<CounterStateModel>({
  name: 'counter',
  defaults: { count: 0, isLoading: true }
})
export class CounterState {
  // Returning the data
  @Selector() 
  static count(state: CounterStateModel) {
    return state.count;
  }

  @Selector() 
  static isLoading(state: CounterStateModel) {
    return state.isLoading;
  }

  // functions
  @Action(Initialize)
  initialize(
    context: StateContext<CounterStateModel>, 
    { payload }: Initialize) 
  {
    return timer(2000).pipe(
      tap(() => context.dispatch(new Override(payload)))
    );
  }

  @Action(Increment)
  increment(context: StateContext<CounterStateModel>, { payload }: Increment) {
    const state = context.getState();
    context.patchState({ count: state.count + payload });
  }

  @Action(Decrement)
  decrement(context: StateContext<CounterStateModel>, { payload }: Decrement) {
    const state = context.getState();
    context.patchState({ count: state.count - payload });
  }

  @Action(Override)
  override(context: StateContext<CounterStateModel>, { payload }: Override) {
    context.patchState({
      count: payload,
      isLoading: false
    });
  }
}