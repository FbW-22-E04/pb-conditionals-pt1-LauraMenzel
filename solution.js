// 1.
const int1 = 61
const int2 = 12

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99))  {
    console.log("true")}
    else {console.log("false") }



// 2.
const int3 = 72

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99) || (int3 >= 50 && int3 <=99));
{console.log("true")}

//3.
const a = 20
const b = 66
const c = 80

if (a > b && a > c) {
    console.log(a)
}
else if (b > a && b > c) {
    console.log(b)}
  
else {
  console.log(c);
}

if (int1 > int2 && int1 > int3) {
  console.log(int1);
} else if (int2 > int1 && int2 > int3) {
  console.log(int2);
} else {
  console.log(int3);
}

console.log(
  "------------------------------------------------------------------------------"
);
// 4.
const str = "thon" 
if (str .startsWith("Py"))
{console.log(str);}
else {

    var tst = "Py" + str;
    console.log(tst);

    let result = "Py".concat(str);
    console.log(result);
}

console.log(
  "------------------------------------------------------------------------------"
);
//5.
let sum = int1 + int2

if (sum >= 50 && sum <= 80) 
{console.log("65");}
else {console.log("80");}

console.log(
  "------------------------------------------------------------------------------"
);
//6.

const int4 = 7
const int5 = 9

if (int4 + int5 == 8 || int4 - int5 == 8) {console.log("true");}
else{console.log("false");}

console.log(
  "------------------------------------------------------------------------------"
);

//7.

if (int4 == 15 || int5 == 15 || int4 + int5 == 15) {console.log("true");}
else {console.log("false");}

console.log(
  "------------------------------------------------------------------------------"
);

//8.

if ((int4 % 7 === 0) || (int5 % 11 === 0)) {console.log("true");}
else {console.log("false");}

console.log(
  "------------------------------------------------------------------------------"
);

//9.
let sumInt = int4 + int5

if (int4 === int5){console.log(sumInt * 3);}
else{console.log(sumInt);}

console.log(
  "------------------------------------------------------------------------------"
);

//10.
 let diff = int5 - 19
 if (int5 > 19) {console.log(diff * 2);}
 else {console.log(diff);}

 console.log(
   "------------------------------------------------------------------------------"
 );

 //11.
const firstName = "Laura"
const age = 34
if ( age < 13){console.log(`${firstName} is a child`);}
 else if (age >= 13 && age < 20)
 {console.log(`${firstName} is a teenager`);}

 else if (age >= 20 && age < 30)
 {console.log(`${firstName} is a young adult`);}

 else {console.log(`${firstName} is a adult`);}

 