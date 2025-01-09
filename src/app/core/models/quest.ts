// src/app/core/models/quest.ts

import {Difficulty} from './difficulty';
import {Status} from './status';

export interface Quest {

  id: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  status: Status;

}
