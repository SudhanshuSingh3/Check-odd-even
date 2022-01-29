//We create a function check that take formal argument
//we store a argument in temperory variable (here ,a)
//check the type of a and store that another varible(here, b)
//the we check the condition in if block if a is equal to null,undefined or false or string it give output "enter correct value"
//if if-condition is false elseif block will run if value is zero it give enen number
//if else-if block false else block will run in else block further we check is their is even or odd number using if else. 


function check(num){
    var  a=num;
    var  b=typeof(a)
     if(a==null||a==undefined||a==false||b=='string'){
       console.log("Please Enter correct input");
       
     }
     else if(a==0){
       console.log("Even number");
     }
     else{
       if(a%2==0){
         console.log("Even number");
         
       }
       else{
         console.log("Odd number");
       }
     }
   }
   
   check("hello");