(() => {
  const $counter = document.getElementById("js-counter");

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);
    if ($targetButton.textContent === "+") {
      $counter.textContent = currentCount + 1;
    } else if ($targetButton.textContent === "+10") {
      $counter.textContent = currentCount + 10;
    } else if ($targetButton.textContent === "-10") {
  //     $counter.textContent = currentCount - 10;
  //   } else {
  //     $counter.textContent = currentCount - 1;
  //   }
  // };
  // 0より下に行かないように設定
  $counter.textContent = Math.max(0, currentCount - 10);
  if (currentCount - 10 < 0) {
    loadVideo();
  }
} else {
  // 0より下に行かないように設定
  $counter.textContent = Math.max(0, currentCount - 1);
  if (currentCount - 1 < 0) {
    loadVideo();
  }
}
};
  for (
    let index = 0;
    index < document.getElementsByClassName("js-button").length;
    index++
  ) {
    document.getElementsByClassName("js-button")
      [index].addEventListener("click", (e) => clickHandler(e));
  }
})();
