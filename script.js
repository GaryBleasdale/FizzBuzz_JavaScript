let arr=[]
for (i=1;i<101;i++){
  arr.push(i)
}

let arr2=[]
for (number of arr){
  if (number%3!=0 && number%5!=0){
    arr2.push(number)
  }else if (number%3===0&&number%5!=0){
    arr2.push("fizz")
  } else if (number%5===0&&number%3!=0){
    arr2.push('buzz')
  } else{
    arr2.push('fizzbuzz')
  }
}

console.log(arr2.toString())