// src/app/quest-edit-dialog/quest-edit-dialog.component.ts

import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {Quest} from '../quest';
import {Difficulty} from '../difficulty';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-quest-edit-dialog',
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  templateUrl: './quest-edit-dialog.component.html',
  styleUrl: './quest-edit-dialog.component.scss'
})
export class QuestEditDialogComponent {

  quest: Quest = inject(MAT_DIALOG_DATA);
  protected readonly Difficulty = Difficulty;
  protected readonly Object = Object;

  constructor(private readonly dialogRef: MatDialogRef<QuestEditDialogComponent>) {
  }

  saveQuest() {
    this.dialogRef.close(this.quest);
  }

}
