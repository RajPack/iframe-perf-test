export function loadMfe(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if the script is already loaded
    const existingScript = document.querySelector(`script[src="${url}"]`);
    if (existingScript) {
      resolve();
      return;
    }

    // Create a script element
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.setAttribute('type', 'module');
    script.async = true;

    // Resolve the promise when the script is loaded
    script.onload = () => {
      resolve();
    };

    // Reject the promise if there's an error loading the script
    script.onerror = () => {
      reject(new Error(`Failed to load script ${url}`));
    };

    // Append the script to the document head
    document.head.appendChild(script);
  });
}
