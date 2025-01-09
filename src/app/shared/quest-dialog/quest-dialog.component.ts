// src/app/shared/quest-dialog/quest-dialog.component.ts

import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {Difficulty} from '../../core/models/difficulty';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {DialogData} from './dialog-data';

@Component({
  selector: 'app-quest-dialog',
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  templateUrl: './quest-dialog.component.html',
  styleUrl: './quest-dialog.component.scss'
})
export class QuestDialogComponent {

  protected dialogData: DialogData = inject(MAT_DIALOG_DATA);
  protected readonly Difficulty = Difficulty;
  protected readonly Object = Object;

  constructor(private readonly dialogRef: MatDialogRef<QuestDialogComponent>) {
  }

  saveQuest() {
    this.dialogRef.close(this.dialogData.quest);
  }

}
