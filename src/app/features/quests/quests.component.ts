// src/app/quests/quests.component.ts

import {Component} from '@angular/core';
import {QuestCardComponent} from './quest-card/quest-card.component';
import {QuestManagerService} from '../../core/services/quest-manager.service';
import {Quest} from '../../core/models/quest';

@Component({
  selector: 'app-quests',
  imports: [QuestCardComponent],
  templateUrl: './quests.component.html',
  styleUrl: './quests.component.scss'
})
export class QuestsComponent {

  constructor(private readonly questManagerService: QuestManagerService) {
  }

  protected getAllQuests(): Quest[] {
    return this.questManagerService.quests;
  }

}
