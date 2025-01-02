// src/app/quests/quests.component.ts

import {Component} from '@angular/core';
import {QuestCardComponent} from '../quest-card/quest-card.component';
import {Quest} from '../quest';
import {Difficulty} from '../difficulty';

@Component({
  selector: 'app-quests',
  imports: [
    QuestCardComponent
  ],
  templateUrl: './quests.component.html',
  styleUrl: './quests.component.scss'
})
export class QuestsComponent {

  quests: Quest[] = [
    {
      id: 1,
      title: "Retrieve the Lost Amulet",
      description: "Travel to the ancient ruins and find the lost amulet of Eldara.",
      difficulty: Difficulty.MEDIUM
    },
    {
      id: 2,
      title: "Slay the Dragon",
      description: "Defeat the fearsome dragon terrorizing the village of Stonehaven.",
      difficulty: Difficulty.HARD
    },
    {
      id: 3,
      title: "Escort the Merchant",
      description: "Safely escort the merchant through the perilous Blackwood Forest.",
      difficulty: Difficulty.MEDIUM
    },
    {
      id: 4,
      title: "Gather Healing Herbs",
      description: "Collect rare herbs from the Misty Hills to aid the village healer.",
      difficulty: Difficulty.EASY
    },
    {
      id: 5,
      title: "Rescue the Captive Knight",
      description: "Rescue Sir Cedric, who has been captured by a band of marauding goblins.",
      difficulty: Difficulty.HARD
    },
    {
      id: 6,
      title: "Build a Defensive Wall",
      description: "Help the villagers construct a wall to defend against incoming raids.",
      difficulty: Difficulty.MEDIUM
    },
    {
      id: 7,
      title: "Explore the Abandoned Mine",
      description: "Investigate the abandoned mine rumored to be haunted by spirits.",
      difficulty: Difficulty.MEDIUM
    },
    {
      id: 8,
      title: "Deliver the King's Message",
      description: "Deliver an urgent message from the king to the neighboring kingdom.",
      difficulty: Difficulty.EASY
    },
    {
      id: 9,
      title: "Defend the Caravan",
      description: "Protect the caravan of travelers from bandits on the open road.",
      difficulty: Difficulty.HARD
    },
    {
      id: 10,
      title: "Recover the Stolen Relic",
      description: "Track down the thieves who stole the sacred relic of Aeloria.",
      difficulty: Difficulty.MEDIUM
    }
  ];

}
