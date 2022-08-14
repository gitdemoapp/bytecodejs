// array:-  collection of similar elements is called as an array.
//indexing starts from 0 only
//we can represent an array using [].

// let arr1=[10,20,30,40,50];

//console.log(arr1[0],arr1[4]);


//console.log(arr1[-10],arr1[6]);  //undefined undefined

//if we want to find the length of an array then we can use "length" 

// console.log(arr1.length);

// arr1.length=3;

// console.log(arr1[2]);


//delete :-  
//Memory not released by empty elements


// let arr1=[10,20,30,40,50];


// delete arr1[0];

// delete arr1[1];

// delete arr1[2];

// console.log(arr1[500]);

//push()==>adding element at last
//pop()==>removing element from last
//unshift()==>adding at beginning
//shift()==>removing from beginning



// let arr1=[10,20,30,40,50];

// console.log(arr1.push(60,70,80));//added at last 

//console.log(arr1);//[10, 20, 30, 40, 50, 60, 70, 80 ]
    
   
 

// arr1.pop();//to delete last element

// console.log(arr1);


// console.log(arr1.pop());



// let arr1=[10,20,30,40,50];

// //arr1.unshift(100,200,300);

// console.log(arr1.unshift(100,200,300));


// console.log(arr1);//[ 100, 200, 300, 10,  20,  30,  40, 50]
   

// console.log(arr1.shift());

// console.log(arr1);//[ <empty element >, 200, 300, 10,  20,  30,  40, 50]  

// console.log(arr1.length);

//  splice():-

// let arr1=[10,20,30,40,50,60,70,80,90,100];

// //arr1.splice(3,4);

// //console.log(arr1);


// //arr1.splice(3,0);

// //console.log(arr1);

// //arr1.splice(3,8);


// console.log(arr1);

// //console.log(arr1.length);


// //arr1.splice(-6,2);

// console.log(arr1);


// ////arr1.splice(1);

// //console.log(arr1);

// //arr1.splice(-6,-2);//we cant take number of count as -ve value


// arr1.splice(1,0,200,300,400);

// console.log(arr1);
   
//slice()

// let arr1=[10,20,30,40,50,60,70,80,90,100];

// //arr1.slice(2,8);

// //console.log(arr1.slice(2,8));

// console.log(arr1.slice(-8,-6));
  



//spread operator:-

// let a1=[10,20,30];

// let a2=[40,50,60];

// let a3=[...a1,...a2,70,80];

// console.log(a3);

//findIndex()

// let a1=[10,20,30,40,50,60];

// console.log(a1.findIndex((element,index)=>{
//     return element==600;
// }));


//map()-


//let a1=[10,20,30,40,50,60];




// console.log([1,2,3,4,5].map((element,index)=>{
//     return element*100;
// }));


// console.log([1,2,3,4,5].map(element=>
//     {
//           return element*5;
//     }
//     ).filter((element,index)=>{

//         return element%2!=0;

//     }));


//filter():

// console.log([1,2,3,4,5].filter((e,i)=>{
//         return e>3;
//     }));



//reduce():-

// console.log([1,2,3,4,5,6].reduce((a,b)=>{
//          return a+b;
//   }));


//   console.log([1,2,3,4,5,6].reduce((a,b)=>{
//     return a+b;
// },200));


//reduceRight();

// console.log(["bytecode","to","welcome"].reduceRight((firstElement,nextElement)=>{
//     return firstElement+nextElement;
// }));


//flat():-

//console.log([1,[2],[3],[4],[5]].flat(1));

//console.log([[[[[[[1]]]]]],[[[[[[[[[[[2]]]]]]]]]]],[[[[[3]]]]]].flat(Infinity));//[ 1, 2, 3 ]


// let a1=[1,2,3,1,2,3,4,5,6];

// a1.forEach((e,i)=>{
//        console.log(a1.indexOf(e));
// })


//sort()

//ascending order or descending order

// console.log([1,2,0,5,4,10].sort((i1,i2)=>{
//     return -(i2-i1);
// }));


//reverse():--only reverse an array

//console.log([1,2,0,5,4,10].reverse());

//console.log("Hello".reverse());


//console.log(Array.from("Hello").reverse());  [ 'o', 'l', 'l', 'e', 'H' ]

//console.log(Array.from("Hello").reverse().toString().replaceAll(",",""));

//foreach():

["Hello","kayum","how are you"].forEach((e,i)=>{
     console.log(e);

     console.log(i);
})


   










