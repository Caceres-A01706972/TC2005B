let n1 = 0;
let n2 = 1; 
var num = Math.floor(Math.random() * 10);
console.log( "Fibonacci Series: ");  
for ( let i = 1; i <= num; i++)  {   
    console.log(n1); // print the n1  
    let next_num = n1 + n2; // sum of n1 and n2 into the next_num  
      
    n1 = n2; // assign the n2 value into n2  
    n2 = next_num; // assign the next_num into n2  
}  