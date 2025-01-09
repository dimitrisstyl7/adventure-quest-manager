// src/app/shared/quest-dialog/quest-dialog.component.ts

import {Component, inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {Difficulty} from '../../core/models/difficulty';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {DialogData} from './dialog-data';
import {QuestManagerService} from '../../core/services/quest-manager.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-quest-dialog',
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, NgIf],
  templateUrl: './quest-dialog.component.html',
  styleUrl: './quest-dialog.component.scss'
})
export class QuestDialogComponent implements OnInit {

  protected dialogData: DialogData = inject(MAT_DIALOG_DATA);
  protected readonly Difficulty = Difficulty;
  protected readonly Object = Object;
  protected titleError: string | null = null;

  constructor(private readonly dialogRef: MatDialogRef<QuestDialogComponent>,
              private readonly questManagerService: QuestManagerService) {
  }

  protected get descriptionError(): string | null {
    const description = this.dialogData.quest.description;
    if (!description || description.trim().length === 0) return 'Description cannot be empty';
    return null
  }

  ngOnInit() {
    this.onTitleChange(this.dialogData.quest.title);
  }

  protected saveQuest() {
    this.dialogRef.close(this.dialogData.quest);
  }

  protected onTitleChange(newTitle: string) {
    const id = this.dialogData.quest.id;
    const title = newTitle.trim();
    if (!title || title.length === 0) this.titleError = 'Title cannot be empty';
    else if (this.questManagerService.isTitleUnique(title, id)) this.titleError = 'Title must be unique';
    else this.titleError = null;
  }

}
