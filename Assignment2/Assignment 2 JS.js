// Question 1:
// What is the value of clothes[0] and why?
// const clothes = ['jacket', 't-shirt'];
// clothes.length = 0;
// console.log(clothes[0]);
// ANS:
// Value of 'clothes[0]' is undefined.
// When JS executes,'clothes.length=0' deletes 
// all the items of the array 'clothes'


// QUESTION 2:
// Write a Javascript program to find the sum of 
// all elements of a given array?

var arr = [5,10,15,20,25,30],
    s = 0,
    i;
for (i = 0; i < arr.length; i += 1) 
   {
    s += arr[i];
    }
console.log(+s); 