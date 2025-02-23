export function hideHeaderIfInIframe(): void {
  if (window.self !== window.top) {
    // The page is loaded inside an iframe
    const header: HTMLElement | null = document.querySelector('lib-header');
    const footer: HTMLElement | null = document.querySelector('lib-footer');
    if (header) {
      header!.style.display = 'none';
      footer!.style.display = 'none';
    }
  }
}
