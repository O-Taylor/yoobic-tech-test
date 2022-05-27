import { createReducer, on } from '@ngrx/store';
import {getData} from "./cards.actions";

export const initialState = 'Hello'

export const cardsReducer = createReducer(
   initialState,
   on(getData, (state) => 'Good bye')
)
