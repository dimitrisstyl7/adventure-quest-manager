// src/app/shared/quest-dialog/quest-dialog.service.ts

import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {QuestDialogComponent} from './quest-dialog.component';
import {DialogData} from './dialog-data';
import {Quest} from '../../core/models/quest';

@Injectable({
  providedIn: 'root'
})
export class QuestDialogService {

  constructor(private readonly dialog: MatDialog,) {
  }

  openDialog(data: DialogData, afterClosed: (quest: Quest) => void) {
    const buttonElement = document.activeElement as HTMLElement; // Get the currently focused element
    buttonElement.blur(); // remove focus

    const config: MatDialogConfig = {
      data,
      position: {top: '70px'},
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '150ms',
      width: '500px',
      maxWidth: '500px',
      minWidth: '300px',
      height: 'auto',
      minHeight: '100px',
    };

    const dialogRef = this.dialog.open(QuestDialogComponent, config);
    dialogRef.afterClosed().subscribe((quest: Quest) => afterClosed(quest));
  }


}
