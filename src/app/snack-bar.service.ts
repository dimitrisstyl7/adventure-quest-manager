import {Injectable} from '@angular/core';
import {SnackBarComponent} from './snack-bar/snack-bar.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private readonly snackBar: MatSnackBar) {
  }

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 1800,
      data: message
    })
  }

}
