document.getElementById("submit").onclick = function() {message()};

function message() {
  let n1 = document.getElementById("firstNumber").value;
  let n2 = document.getElementById("secondNumber").value;

  alert( (Math.trunc(n1)) +' x '+ n2 +' = '+ ((Math.trunc(n1)) * n2) );
}
