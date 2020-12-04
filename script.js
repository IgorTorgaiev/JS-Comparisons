// Conditional (Ternary) Operator

function myFunction() {
    var sum, selling;
    sum = document.getElementById("sum").value;
    selling = (sum > 99.9)?"The machine gives no change":"99.9 are accepted";
    document.getElementById("larger").innerHTML = selling + " for the product";
}

function theFunction() {
    var movie, watch;
    movie = document.getElementById("movie").value;
    watch = (movie<18) ? "You are too young":"You must be at least 18 years old";
    document.getElementById("less").innerHTML = watch + " to watch the thriller";
}