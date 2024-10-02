document.getElementById('screenshotBtn').addEventListener('click', () => {
  // Capture the current visible tab
  chrome.tabs.captureVisibleTab(null, {format: 'png'}, (image) => {
    downloadImage(image);
  });
});

// Function to download the captured image
function downloadImage(image) {
  const link = document.createElement('a');
  link.href = image;
  link.download = 'screenshot.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
