//navbar and hamburger menu//
var icon = document.getElementById("humburger");
let nav = document.getElementById("navbar");
const body = document.body;
const cv = document.getElementById("download");
const link = document.querySelectorAll("a")

icon.addEventListener('click', function(event){
        event.preventDefault();
        navbar.classList.toggle('active')
});

cv.addEventListener('click', function(e){
        event.target.textContent = "Cv Downloaded"
})

nav.addEventListener("click", function(e){
        navbar.classList.remove('active')
})
//nashy the compiller

//maspellings haana basa

// name = "Tapiwanashe"

// print(len(name))

// surname = "chakurungama"

// print("f{name} and his surname is {surname}")

// number1= 10;
// number2 = 20;

// if number1 > number2 :
//      print('number1 is greater')
