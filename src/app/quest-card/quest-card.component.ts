// src/app/quest-card/quest-card.component.ts

import {Component, CUSTOM_ELEMENTS_SCHEMA, input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Quest} from '../quest';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-quest-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatTooltip],
  templateUrl: './quest-card.component.html',
  styleUrl: './quest-card.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QuestCardComponent {

  inputSignal = input<Quest>();
  quest: Quest | undefined;

  ngOnInit() {
    this.quest = this.inputSignal();
  }

}
