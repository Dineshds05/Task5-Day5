//Arrow Functions

//A.Print odd numbers in an array

const array=[1,2,3,4,5,6,7,8,9]
const oddnumbers=array.filter((val, index, actarray)=>val%2==1)
console.log("The odd Numbers :",oddnumbers);


//convert all the strings to title caps in a string array

// const str = ["foo","bar","baz"];
// const newString = str.map((val,index, actarray) => val.toUpperCase())
// console.log(newString);

//
const str = "foo,bar,baz";
 const newString = str.split(",").map(val => val.toUpperCase()).join(",")
console.log(newString);

//sum of all numbers in an array

const redarray=[2,3,4,5,6,7]
const sumofnumbers=redarray.reduce((acct,val,index,actualarray)=>{
    return acct+val
},0);
console.log(sumofnumbers);


// Return all the prime numbers in an array

const Array = [1,3,2,5,6,7,10];
const isprime=(num)=>{
    for(let i=2;i<num;i++){
    if(num % i === 0)
    return false;
}
return num!==1;
};
const primenumbers=Array.filter(isprime);
console.log("The prime Numbers :",primenumbers);

//Return all the palindromes in an array
let palindrome = (string) =>{
  let reversestring = string.split('').reverse().join('');
  if(string === reversestring){
    console.log("palindrome")
  }else{
    console.log("Not a palindrome")
  }
}
palindrome("madam");

// programs in anonymous function & IIFE

//Rotate an array by k times - arrow function

// let array2 = [1,2,3,4,5,6]
// const rotation = (k) =>{
//   for(let i=0; i<k; i++){
//     const rotate = array2.shift();
//     array2.push(rotate)
//   }
//   console.log(array2)
// }
// rotation(3)


// programs in anonymous function & IIFE
//Rotate an array by k times
function rotation(array6 , k){
  for(let i=0; i<k; i++){
        const rotate = array6.shift();
        array6.push(rotate)
      }
      console.log(array6)
    }
    rotation([1,2,3,4,5,6],3)
  
IIFE :   (function(array7 , k){
    for(let i=0; i<k; i++){
          const rotate = array7.shift();
          array7.push(rotate)
        }
        console.log(array7)
        })([1,2,3,4,5,6] , 3)


        // Remove duplicates from an array

        function duplicates(array8){
          let dup = [...new Set(array8)];
          console.log(dup);
        }
        duplicates([1,1,2,3,4])

IIFE :    (function(array9){
          let dup = [...new Set(array9)];
          console.log(dup);
          })([1,1,2,3,4])

        
          
          
          
        // Print odd numbers in an array

        function oddnum(array10){
          let od=" "
          for(let j=0;j<array10.length;j++){
            if(array10[j]%2!==0)
            od +=" " + array10[j];
            }console.log("The odd Numbers:",od.trim());
          }
        oddnum([1,2,3,4,5,6])

IIFE :    (function(array11){
          let od=" "
         for(let j=0;j<array11.length;j++){
         if(array11[j]%2!==0)
         od +=" " + array11[j];
         }console.log("The odd Numbers:",od.trim())
        })([1,2,3,4,5,6])


        // Convert all the strings to title caps in a string array

        function upper(strin) {
          let upperc=" "
          for(let i=0;i<strin.length;i++){
            upperc+=" "+strin[i].toUpperCase();
          }
          console.log(upperc.trim());
        }upper(["foo","bar","baz"])


        IIFE : 

          (function (str) {
          let upperc=" "
          for(let i=0;i<str.length;i++){
            upperc+=" "+str[i].toUpperCase();
          }
          console.log(upperc.trim());
        })(["foo","bar","baz"]);

// Sum of all numbers in an array

    function sumofnum(array){
    var sum = 0;
    for(let i = 0 ; i< array.length ; i++){
     sum = sum + array[i];
     }
     console.log("The Sum of array:",sum);
     }
     sumofnum([1,2,3,4,5,6])

     IIFE :      (function (array){
                  var sum = 0;
                  for(let i=0;i<array.length;i++){
                  sum = sum + array[i];
                  }
                  console.log("The Sum of array:",sum);
                  })([1,2,3,4,5,6])


      // Return all the prime numbers in an array

      //Anonymous Function:
      function primesof(numArray){
           numArray = numArray.filter((number) => {
             for (var i = 2; i <= Math.sqrt(number); i++) {
               if (number % i === 0) 
               return false;
             }
             return true;
           });
           console.log(numArray);
       }primesof([1,2,3,4,5,6])
IIFE : 
        (function(numArray){
           numArray = numArray.filter((number) => {
             for (var i = 2; i <= Math.sqrt(number); i++) {
               if (number % i === 0) return false;
             }
             return true;
           });
           console.log(numArray);
       })([1,2,3,4,5,6])

       // Return all the palindromes in an array

       function palindrom(string){
        const reverse = string.split('').reverse().join('');
        if(string === reverse){
          console.log("palindrome")
        }else{
          console.log("Not a palindrome")
        }
      }
      palindrome("land");


      IIFE : 
        (function(string){
          const reverse = string.split('').reverse().join('');
          if(string === reverse){
            console.log("palindrome")
          }else{
            console.log("Not a palindrome")
          }
       })("land")
