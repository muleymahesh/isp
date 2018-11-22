import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DasboardPage } from './dasboard';

@NgModule({
  declarations: [
    DasboardPage,
  ],
  imports: [
    IonicPageModule.forChild(DasboardPage),
  ],
})
export class DasboardPageModule {}
