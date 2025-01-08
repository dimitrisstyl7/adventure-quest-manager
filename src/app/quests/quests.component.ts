// src/app/quests/quests.component.ts

import {Component} from '@angular/core';
import {QuestCardComponent} from '../quest-card/quest-card.component';
import {QuestManagerService} from '../quest-manager.service';
import {Quest} from '../quest';

@Component({
  selector: 'app-quests',
  imports: [QuestCardComponent],
  templateUrl: './quests.component.html',
  styleUrl: './quests.component.scss'
})
export class QuestsComponent {

  constructor(private readonly questManagerService: QuestManagerService) {
  }

  getAllQuests(): Quest[] {
    return this.questManagerService.quests;
  }

}
