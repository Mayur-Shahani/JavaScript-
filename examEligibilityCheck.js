 let studentName = "Mayur Shahani"
 let age = 20
 let marks = 100
 let isRegistered = true

 let isEligible = (age >= 18) && (marks >= 60) && isRegistered;

 if(isEligible)
 {
    console.log("Mayur is eligibke for exam")
 }
 else{
    console.log("Nor eligible for exam");
    
 }