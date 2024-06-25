(() => {
  const $counter = document.getElementById("js-counter");

  // const clickHandler = (e) => {
  //   const $targetButton = e.currentTarget;
  const updateCounter = (increment) => {
    let currentCount = parseInt($counter.textContent);
    let newCount = currentCount + increment;
    if (newCount < 0) {
      alert("これ以上押せません!!");
      newCount = 0;
    }
    $counter.textContent = newCount;
  };

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    if ($targetButton.textContent === "+") {
      updateCounter(1);
    } else if ($targetButton.textContent === "+10") {
      updateCounter(10);
    } else if ($targetButton.textContent === "-10") {
      updateCounter(-10);
    } else {
      updateCounter(-1);

      // let currentCount = parseInt($counter.textContent);
      // if ($targetButton.textContent === "+") {
      //   $counter.textContent = currentCount + 1;
      // } else if ($targetButton.textContent === "+10") {
      //   $counter.textContent = currentCount + 10;
      // } else if ($targetButton.textContent === "-10") {
      //     $counter.textContent = currentCount - 10;
      //   } else {
      //     $counter.textContent = currentCount - 1;
      //   }
      // };
      // 0より下に行かないように設定
      // $counter.textContent = Math.max(0, currentCount - 10);
      // if (currentCount - 10 < 0) {
      //   alert("これ以上押せません!!");
      // }
      //   } else {
      // // 0より下に行かないように設定
      // $counter.textContent = Math.max(0, currentCount - 1);
      // if (currentCount - 1 < 0) {
      //   alert("これ以上押せません!!");
      // }
    }
  };
  for (
    let index = 0;
    index < document.getElementsByClassName("js-button").length;
    index++
  ) {
    document
      .getElementsByClassName("js-button")
      [index].addEventListener("click", (e) => clickHandler(e));
  }

  const inputEl = document.querySelector(".input");
  const bodyEl = document.querySelector("body")

  inputEl.checked = false;

  // updateBody()

  // function updateBody () {
  //   if(inputEl.checked) {
  //     bodyEl.style.background = "#636363";
  //   }else{
  //     bodyEl.style.background = "#fff";
  //   }
  // }
  const updateBody = () => {
    if (inputEl.checked) {
      bodyEl.style.background = "#636363"
    } else {
      bodyEl.style.background = "#fff"
    }
  };
  updateBody();

  inputEl.addEventListener ("input",()=>{
    updateBody()
  })

})();
