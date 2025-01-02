// src/app/quest.ts

import {Difficulty} from './difficulty';

export interface Quest {

  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;

}
