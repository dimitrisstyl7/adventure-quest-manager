// src/app/shared/navbar/navbar.component.ts

import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TitleCasePipe} from '@angular/common';
import {DialogData} from '../quest-dialog/dialog-data';
import {Difficulty} from '../../core/models/difficulty';
import {Status} from '../../core/models/status';
import {QuestDialogService} from '../quest-dialog/quest-dialog.service';
import {QuestManagerService} from '../../core/services/quest-manager.service';
import {SnackBarService} from '../snack-bar/snack-bar.service';

@Component({
  selector: 'app-navbar',
  imports: [MatTabsModule, RouterOutlet, RouterLink, TitleCasePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  readonly title = 'Adventure Quest Manager';
  readonly links = ['quests', 'about'];
  activeLink = this.links[0];


  constructor(private readonly dialogService: QuestDialogService,
              private readonly snackBarService: SnackBarService,
              private readonly questManagerService: QuestManagerService) {
  }

  openNewQuestDialog() {
    const dialogData: DialogData = {
      heading: 'New Quest',
      positiveButtonText: 'Create',
      quest: {
        id: 0,
        title: '',
        description: '',
        difficulty: Difficulty.EASY,
        status: Status.INCOMPLETE
      }
    };

    this.dialogService.openDialog(dialogData, quest => {
      if (!quest) return;
      this.questManagerService.createQuest(quest);
      this.snackBarService.openSnackBar('Quest created successfully');
    });
  }

}
