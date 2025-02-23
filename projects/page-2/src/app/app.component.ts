import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import {
  HeaderComponent,
  FooterComponent,
  AppMenuComponent,
} from 'app-shell-lib';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    BrowserModule,
    HeaderComponent,
    FooterComponent,
    AppMenuComponent,
    ContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'page-2';
}
