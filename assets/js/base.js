document.addEventListener('DOMContentLoaded', function () {
  const versionLabel = document.querySelector('.version-label');
  if (versionLabel) {
    const version = getComputedStyle(document.documentElement)
      .getPropertyValue('--site-version')
      .trim()
      .replace(/"/g, '');
    versionLabel.textContent = version;
  }
});