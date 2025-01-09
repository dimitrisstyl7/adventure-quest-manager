// src/app/app.routes.ts

import {Routes} from '@angular/router';
import {QuestsComponent} from './features/quests/quests.component';

export const routes: Routes = [
  {path: '', redirectTo: 'quests', pathMatch: 'full'},
  {path: 'quests', component: QuestsComponent},
];
