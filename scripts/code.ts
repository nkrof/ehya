const a1 = document.querySelector(".getitnow") as HTMLElement;

function myFunction(event: Event) {
    alert("I am an alert box!");
    a1.innerText = "New text!";
    console.log(event)
  }

a1.addEventListener('click', myFunction)


console.log(a1)