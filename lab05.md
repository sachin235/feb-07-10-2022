* Here's a small exercise that will help you get accustomed to  functional style of coding in TypeScript. Create lab_05.ts
* As TS developers you will follow this style extensively.

* Create an array of numbers __101, 22, 43, 14, 5, 906, 310, 561, 84, 23, 100__

* Implement the following in a functional style using arrow functions. 
<br/>
1) Print all the numbers <br/>
2) Print the sum of all numbers <br/>
3) Print the first odd number <br/>
4) Generate an list of squares of all numbers <br/>
5) Generate a list of numbers divisible by 5.  <br/>
6) Print all the even numbers <br/>

##### _Hint:_
* Refer to methods like find, map, findAll, filter, reduce, forEach 

* Here's how you implement (1) without using a loop

``` typescript
let numbers: number[] = [101, 22, 43, 14, 5, 906, 310, 561, 84, 23, 100];
numbers.forEach((num: number) => {
	console.log(num);
}); 
```