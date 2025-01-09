// src/app/quest-card/quest-card.component.ts

import {Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Quest} from '../../../core/models/quest';
import {MatTooltip} from '@angular/material/tooltip';
import {QuestManagerService} from '../../../core/services/quest-manager.service';
import {Status} from '../../../core/models/status';
import {QuestDialogService} from '../../../shared/quest-dialog/quest-dialog.service';
import {DialogData} from '../../../shared/quest-dialog/dialog-data';
import {SnackBarService} from '../../../shared/snack-bar/snack-bar.service';

@Component({
  selector: 'app-quest-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatTooltip],
  templateUrl: './quest-card.component.html',
  styleUrl: './quest-card.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QuestCardComponent implements OnInit {

  quest: Quest | undefined;
  inputSignal = input<Quest>();
  protected readonly Status = Status;

  constructor(private readonly dialogService: QuestDialogService,
              private readonly snackBarService: SnackBarService,
              private readonly questManagerService: QuestManagerService) {
  }

  ngOnInit() {
    this.quest = this.inputSignal();
  }

  openEditQuestDialog(quest: Quest) {
    const dialogData: DialogData = {
      heading: 'Edit Quest',
      positiveButtonText: 'Save',
      quest: {...quest}
    };

    this.dialogService.openDialog(dialogData, quest => {
      if (!quest) return;
      this.quest = quest;
      this.questManagerService.updateQuest(quest);
      this.snackBarService.openSnackBar('Quest saved successfully');
    });
  }

  deleteQuest(id: number) {
    this.questManagerService.deleteQuest(id);
    this.snackBarService.openSnackBar('Quest deleted successfully');
  }

  markQuestAsCompleted(id: number) {
    this.questManagerService.changeQuestStatus(id, Status.COMPLETED);
    this.snackBarService.openSnackBar('Quest marked as completed');
  }

  markQuestAsIncomplete(id: number) {
    this.questManagerService.changeQuestStatus(id, Status.INCOMPLETE);
    this.snackBarService.openSnackBar('Quest marked as incomplete');
  }

}
