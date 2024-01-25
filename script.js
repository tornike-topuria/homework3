//1
let array1 =[ 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8]
function dadebitiricxvebi(arr) {
     sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
}

 result = dadebitiricxvebi(array1);
console.log(result);



 




//2
function bowL(){
    let array2 = [10, 50, 6, 7, 8, 11, 6, 3, 9]
    sum = 0
    for (let jami = 0; jami < array2.length; jami = jami + 1) {
        sum = sum + array2[jami]
    }
    console.log(sum)
}
bowL()

//3
let user = {
    firstname: 'tom',
    lastname: 'tobias',
    age: 32,
    isloggedin: true
  }
  function True() {
    if (user.isloggedin == true){
        console.log(user.firstname, user.lastname); 
    }
    else{
        console.log(false);
    }    
}
 True()

 //4
let array4 = [-4, -20, 12]
function Number(hig) {
    for (i = 0; i < hig.length; i++) {
        if(hig[i] > hig.length) {
            console.log(hig[i]);
        }
    }
}
Number(array4)

 

  //5 
  function eveN(NumbeR) {
    NumbeR = 20
    if(NumbeR % 2 === 0){
       console.log("this number is even");
   }
   
     else{  console.log("this number is odd");
    }
   }
   eveN()

   //6
 let array6 = [1, 2, 3, 4, 5];
 for(i = array6.length - 1; i >= 0 ; i--){
    console.log(array6[i])

 }



//7
function age(){
    Age = 20
    if(Age > 18){
        console.log("სრულწლოვანი");
    }
    else{
        console.log( "არასწულწლოვანი");
    }
}
age()




//8
function array8(num1,num2){
    
    if(num1 > num2) {
        console.log("num1 is the largest");
    }
    else if(num2 > num1) {
        console.log("num2 is the largest");
    }
    else{
        console.log("error");
    }
      
}
array8(9 , 7)