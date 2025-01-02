// src/app/navbar/navbar.component.ts

import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [MatTabsModule, RouterOutlet, RouterLink, TitleCasePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  readonly title = 'Adventure Quest Manager';
  readonly links = ['dashboard', 'quests', 'about'];
  activeLink = this.links[0];

}
