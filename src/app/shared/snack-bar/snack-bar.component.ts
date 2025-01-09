// src/app/shared/snack-bar/snack-bar.component.ts

import {Component, inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  imports: [],
  templateUrl: './snack-bar.component.html',
  styleUrl: './snack-bar.component.scss'
})
export class SnackBarComponent {

  protected message: string = inject(MAT_SNACK_BAR_DATA);

}
