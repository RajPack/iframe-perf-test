import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-page1-iframe',
  imports: [],
  templateUrl: './page1-iframe.component.html',
  styleUrl: './page1-iframe.component.css',
})
export class Page1IframeComponent implements AfterViewInit {
  @ViewChild('iframe') iframe!: ElementRef<HTMLIFrameElement>;

  cb = (e: any) => {
    // message that was passed from iframe page
    let message = e.data;

    this.iframe.nativeElement.style.height = message.height + 'px';
    this.iframe.nativeElement.style.width = message.width + 'px';
  };

  ngAfterViewInit(): void {
    this.adjustIframeHeight(this.iframe.nativeElement);
  }

  adjustIframeHeight(iframe: HTMLIFrameElement): void {
    window.addEventListener('message', this.cb, false);
  }

  ngOnDestroy(): void {
    window.removeEventListener('message', this.cb);
  }
}
