window.DisabledScroll = function () {
  document.body.style.cssText = `
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      height: 100vh;
  `;
}

window.EnableScroll = function () {
  document.body.style.cssText = ``;
}