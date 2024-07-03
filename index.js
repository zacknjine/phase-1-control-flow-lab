function scuberGreetingForFeet(noOfFeet){
  // Write your code here!
  if(noOfFeet <=400){
    return ('This one is on me!')
  }

  else if (noOfFeet >400 && noOfFeet <=2000) {
    return("That will be twenty bucks.")
  }

  else if (noOfFeet >2000 && noOfFeet<=2500){
    return("I will gladly take your thirty bucks.")
  }

  else {
    return("No can do.")
  }
  
  
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city==="NYC"){
    return("Ok, sounds good.")
  }
  else{
    return("No go.")
  }

  
  

}

function switchOnCharmFromTip(tip){
  // Write your code here!
 switch (tip){
case "generous":
  return "Thank you so much.";
case "not as generous":
  return "Thank you.";
default: return "Bye."
 }
}