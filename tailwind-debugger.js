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
