class Counter {
  constructor(elementId) {
    this.$counter = document.getElementById(elementId);
    this.currentCount = parseInt(this.$counter.textContent);
    this.init();
  }

  init() {
    const buttons = document.getElementsByClassName("js-button");
    for (let button of buttons) {
      button.addEventListener("click", (e) => this.clickHandler(e));
    }
  }

  clickHandler(e) {
    const $targetButton = e.currentTarget;
    if ($targetButton.textContent === "+") {
      this.updateCounter(1);
    } else if ($targetButton.textContent === "+10") {
      this.updateCounter(10);
    } else if ($targetButton.textContent === "-10") {
      this.updateCounter(-10);
    } else {
      this.updateCounter(-1);
    }
  }

  updateCounter(value) {
    this.currentCount += value;
    this.currentCount = Math.max(0, this.currentCount);
    this.$counter.textContent = this.currentCount;
    if (this.currentCount === 0 && value < 0) {
      this.loadVideo();
      alert("これ以上押せません!!");
    }
  }

  loadVideo() {
    // 動画をロードする処理をここに追加
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Counter("js-counter");
});
