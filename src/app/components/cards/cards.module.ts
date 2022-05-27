import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { CardsComponent } from './cards.component';
import { CardsState } from './store';

@NgModule({
  imports: [CommonModule, NgxsModule.forFeature([CardsState])],
  declarations: [CardsComponent],
  exports: [CardsComponent],
})
export class CardsModule {}
