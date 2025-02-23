import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page2-iframe',
  imports: [],
  templateUrl: './page2-iframe.component.html',
  styleUrl: './page2-iframe.component.css',
})
export class Page2IframeComponent {
  @ViewChild('iframe2') iframe!: ElementRef<HTMLIFrameElement>;

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
