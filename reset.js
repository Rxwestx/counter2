(() => {
  const $counter = document.getElementById("js-counter");

  const clickHandler = () => {
    $counter.textContent = 0;
    alert("カウントが0にリセットされました!!");
  };
  document.getElementById("js-reset-button")
    .addEventListener("click", clickHandler);

  })();
