import {Injectable} from '@angular/core';
import {Quest} from './quest';
import {Difficulty} from './difficulty';
import {Status} from './status';

@Injectable({
  providedIn: 'root'
})
export class QuestManagerService {

  constructor() {
  }

  private _quests: Quest[] = [
    {
      id: 1,
      title: "Retrieve the Lost Amulet",
      description: "Travel to the ancient ruins and find the lost amulet of Eldara.",
      difficulty: Difficulty.MEDIUM,
      status: Status.COMPLETED,
    },
    {
      id: 2,
      title: "Slay the Dragon",
      description: "Defeat the fearsome dragon terrorizing the village of Stonehaven.",
      difficulty: Difficulty.HARD,
      status: Status.COMPLETED,
    },
    {
      id: 3,
      title: "Escort the Merchant",
      description: "Safely escort the merchant through the perilous Blackwood Forest.",
      difficulty: Difficulty.MEDIUM,
      status: Status.PENDING,
    },
    {
      id: 4,
      title: "Gather Healing Herbs",
      description: "Collect rare herbs from the Misty Hills to aid the village healer.",
      difficulty: Difficulty.EASY,
      status: Status.PENDING,
    },
    {
      id: 5,
      title: "Rescue the Captive Knight",
      description: "Rescue Sir Cedric, who has been captured by a band of marauding goblins.",
      difficulty: Difficulty.HARD,
      status: Status.PENDING,
    },
    {
      id: 6,
      title: "Build a Defensive Wall",
      description: "Help the villagers construct a wall to defend against incoming raids.",
      difficulty: Difficulty.MEDIUM,
      status: Status.PENDING,
    },
    {
      id: 7,
      title: "Explore the Abandoned Mine",
      description: "Investigate the abandoned mine rumored to be haunted by spirits.",
      difficulty: Difficulty.MEDIUM,
      status: Status.PENDING,
    },
    {
      id: 8,
      title: "Deliver the King's Message",
      description: "Deliver an urgent message from the king to the neighboring kingdom.",
      difficulty: Difficulty.EASY,
      status: Status.PENDING,
    },
    {
      id: 9,
      title: "Defend the Caravan",
      description: "Protect the caravan of travelers from bandits on the open road.",
      difficulty: Difficulty.HARD,
      status: Status.PENDING,
    },
    {
      id: 10,
      title: "Recover the Stolen Relic",
      description: "Track down the thieves who stole the sacred relic of Aeloria.",
      difficulty: Difficulty.MEDIUM,
      status: Status.PENDING,
    }
  ];

  get quests(): Quest[] {
    this.sortQuests();
    return this._quests;
  }

  set quests(value: Quest[]) {
    this._quests = value;
  }

  addQuest(quest: Quest) {
  }

  updateQuest(quest: Quest) {
    this._quests = this._quests.map(q => q.id === quest.id ? quest : q);
  }

  completeQuest(id: number) {
    this._quests = this._quests.map(q => {
      if (q.id === id) q.status = Status.COMPLETED;
      return q;
    });
  }

  deleteQuest(id: number) {
    this._quests = this._quests.filter(q => q.id !== id);
  }

  private sortQuests() {
    const difficultyOrder = [Difficulty.EASY, Difficulty.MEDIUM, Difficulty.HARD];

    this._quests.sort((q1, q2) => {
      // Sort by status first: COMPLETED > PENDING
      if (q1.status === Status.COMPLETED && q2.status === Status.PENDING) return 1;
      if (q1.status === Status.PENDING && q2.status === Status.COMPLETED) return -1;

      // If status is the same, sort by difficulty: HARD > MEDIUM > EASY
      const difficulty1 = difficultyOrder.indexOf(q1.difficulty);
      const difficulty2 = difficultyOrder.indexOf(q2.difficulty);

      return difficulty1 - difficulty2;
    });
  }

}
