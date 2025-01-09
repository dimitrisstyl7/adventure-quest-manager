// src/app/app.routes.ts

import {Routes} from '@angular/router';
import {QuestsComponent} from './features/quests/quests.component';
import {AboutComponent} from './features/about/about.component';

export const routes: Routes = [
  {path: '', redirectTo: 'quests', pathMatch: 'full'},
  {path: 'quests', component: QuestsComponent},
  {path: 'about', component: AboutComponent},
];
