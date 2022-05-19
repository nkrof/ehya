const a1 = document.querySelector(".getitnow")

function myFunction(event) {
    alert("I am an alert box!");
    a1.innerText = "New text!";
    console.log(event)
  }

a1.addEventListener('click', myFunction)


console.log(a1)