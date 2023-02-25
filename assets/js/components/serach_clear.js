window.addEventListener("load", function() {
  var formElement        = document.getElementById('preset-1/1');
  var resetButtonElement = document.getElementById('check-clear');

  console.log(formElement)
  console.log(resetButtonElement)

  // チェックされている要素の値を取得
  resetButtonElement.addEventListener('click', () => {
    formElement.reset();
  });
});

