//1





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

  //5 
  let array5 = [5, 6, 8, 9]
function findEven(arr){
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        console.log(arr[i] + "this number is even")
    }
    else{
        console.log(arr[i] + "this number is odd")
    }
}
}
findEven(array5)






//8
function array8(num1,num2){
    
    
    return num1 > num2
      
}
 result = array8(9 , 7)
console.log(result);