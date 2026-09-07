array = ["munazza","sarosh", "hiba", "khan"];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    console.log(i);
    document.getElementById("i").innerHTML += i + "<br>";
}

for (let j = 10; j > 0; j--) {
    console.log(j);
    document.getElementById("j").innerHTML += j + "<br>";
}
let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(num * i);
    document.getElementById("k").innerHTML += num * i + "<br>";
}
let number = 2;
for (let i = 0; i <=10; i++) {
    document.getElementById("number").innerHTML += number * i + "<br>";
    
}