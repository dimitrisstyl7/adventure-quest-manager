// src/app/quest-card/quest-card.component.ts

import {Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Quest} from '../quest';
import {MatTooltip} from '@angular/material/tooltip';
import {MatDialog} from '@angular/material/dialog';
import {QuestEditDialogComponent} from '../quest-edit-dialog/quest-edit-dialog.component';
import {QuestManagerService} from '../quest-manager.service';
import {Status} from '../status';
import {SnackBarComponent} from '../snack-bar/snack-bar.component';

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

  constructor(private readonly dialog: MatDialog,
              private readonly snackBar: MatSnackBar,
              private readonly questManagerService: QuestManagerService) {
  }

  ngOnInit() {
    this.quest = this.inputSignal();
  }

  openEditDialog(quest: Quest) {
    const buttonElement = document.activeElement as HTMLElement; // Get the currently focused element
    buttonElement.blur();

    const dialogRef = this.dialog.open(QuestEditDialogComponent, {
      data: {...quest},
      position: {top: '70px'},
      enterAnimationDuration: 100,
      exitAnimationDuration: 150,
      width: '500px',
      maxWidth: '500px',
      minWidth: '300px',
      height: 'auto',
      minHeight: '100px',
    });

    dialogRef.afterClosed().subscribe((quest: Quest | undefined) => {
      if (!quest) return;
      this.quest = quest;
      this.questManagerService.updateQuest(quest);
      this.openSnackBar("Quest saved successfully");
    });
  }

  completeQuest(id: number) {
    this.questManagerService.completeQuest(id);
    this.openSnackBar("Quest marked as completed");
  }

  deleteQuest(id: number) {
    this.questManagerService.deleteQuest(id);
    this.openSnackBar("Quest deleted successfully");
  }

  private openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 1800,
      data: message,
    })
  }

}
