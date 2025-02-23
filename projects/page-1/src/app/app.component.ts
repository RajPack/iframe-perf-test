import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  HeaderComponent,
  FooterComponent,
  AppMenuComponent,
} from 'app-shell-lib';
import { ContentComponent } from './content/content.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

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
  title = 'page-1';
}
