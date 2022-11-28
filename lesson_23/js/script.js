// Cycles JS

// Task №1 on cycles
let count = 1;

while(count < 6) {
   console.log(count);
   count++;
}

console.log("");

count = 1;

do {
   console.log(count);
   count++;
} while (count < 6);

console.log("");

for (count = 1; count < 6; count++) {
   console.log(count);
}

console.log("");

// Task №3 on cycles
let num = 0;
while (num < 3) {
   console.log(`Number: ${num}`);
   num++;
}

console.log("");

// Task №4 on cycles
first: for (let num = 0; num < 2; num++) {
   for (let size = 0; size < 3; size++) {
      if(size == 1) break first;
      console.log(size);
   }
}

console.log("");

// Numbers JS

// Task №1 on numbers
console.log("Task №1");
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne);

// Task №2 on numbers
console.log("Task №2");
let value = parseFloat("135.58px");
console.log(value);

// Task №3 on numbers
console.log("Task №3");
value = 58 + "Freelancer"
if (isNaN(value)) {
   console.log("The result is Nan");
}

// Task №4 on numbers
console.log("Task №4");
console.log(Math.max(10, 58, 39, -150, 0));

// Task №5 on numbers
console.log("Task №5");
console.log(Math.floor(58.858));

// String JS

// Task №2 on strings
console.log("Task №2");
let text = 'фрилансер';
console.log(text.slice(5, 6));

// Task №4 on strings
console.log("Task №4");
console.log(text.toUpperCase());

// Task №5 on strings
console.log("Task №5");
console.log(text.slice(3, 6));