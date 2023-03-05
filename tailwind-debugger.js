document.querySelector("[data-debugger]").innerHTML = `
<div class="debugger-container">
          <div class="debugger-body">
            <button id="debuggerToggle" class="info debugger-expand">
              <div class="d-open">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M9.4 18L8 16.6l4.6-4.6L8 7.4L9.4 6l6 6l-6 6Z"/></svg>
              </div>
            </button>
            <h3 id="tailwindMQ" class="info">XL</h3>            
            <h3 id="winH" class="info">windows height: 1920px</h3>
            <h3 id="winW" class="info">windows width: 680px</h3>
            <h3 id="mX" class="info">mouseX: 425px</h3>
            <h3 id="mY" class="info">mouseY: 512px</h3>
          </div>
        </div>
`;

let mousePos = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (e) => {
  e.stopPropagation;
  mousePos = {
    x: e.clientX,
    y: e.clientY,
  };
});

//Information Panel Items
const tailwindMQ = document.getElementById("tailwindMQ");
const winH = document.getElementById("winH");
const winW = document.getElementById("winW");
const mX = document.getElementById("mX");
const mY = document.getElementById("mY");

//Buttons
const debuggerToggleBtn = document.getElementById("debuggerToggle");

const infoSwitch = [winH, winW, mX, mY];

const info = {
  panelOpen: false,
  currentMediaClass: {
    sm: 480,
    md: 768,
    lg: 976,
    xl: 1440,
  },
  windowsH: window.innerHeight,
  windowsW: window.innerWidth,
  mouseX: mousePos.x,
  mouseY: mousePos.y,

  togglePanel() {
    infoSwitch.forEach((e) => {
      e.classList.toggle("debugger-invisible");
    });
    debuggerToggleBtn.childNodes[1].classList.toggle("debugger-rotate90");

    this.panelOpen = !this.panelOpen;
  },
  resizeUpdate() {
    winH.textContent = `width: ${this.windowsH}`;
    winW.textContent = `height: ${this.windowsW}`;
  },
  mousePosUpdate() {
    mX.textContent = `mouse X: ${this.mouseX}`;
    mY.textContent = `mouse Y: ${this.mouseY}`;
  },
  getCurrentMedia() {
    if (this.windowsW < this.currentMediaClass.sm) {
      return "sm";
    } else if (this.windowsW < this.currentMediaClass.md) {
      return "md";
    } else if (this.windowsW < this.currentMediaClass.lg) {
      return "lg";
    } else if (this.windowsW < this.currentMediaClass.xl) {
      return "xl";
    } else {
      return ">xl";
    }
  },
};

// Functions

debuggerToggleBtn.addEventListener("click", (e) => {
  e.stopPropagation;
  e.preventDefault;
  info.togglePanel();
});

window.addEventListener("load", (e) => {
  if (!info.panelOpen) {
    infoSwitch.forEach((e) => {
      e.classList.add("debugger-invisible");
    });
  }
  info.mousePosUpdate();
  info.resizeUpdate();
  tailwindMQ.innerText = info.getCurrentMedia();
});

window.addEventListener("mousemove", (e) => {
  if (info.panelOpen) {
    info.mouseX = e.clientX;
    info.mouseY = e.clientY;
    info.mousePosUpdate();
  }
});

window.addEventListener("resize", (e) => {
  e.stopPropagation;
  info.windowsH = window.innerHeight;
  info.windowsW = window.innerWidth;
  info.resizeUpdate();
  tailwindMQ.innerText = info.getCurrentMedia();
});
