

let button = document.getElementById("btn");
let birthday = document.getElementById("dob");



button.addEventListener("click", () => {

  let bDay = new Date(birthday.value); 
  //the object shows a long date but the input is off by 5 hrs 

  //add 5 hours to Eastern Standard time to hit midnight
  bDay.setHours( bDay.getHours() + 5);
  
  // Converts the input from a long date to a short date.
  let shortDate = bDay.toLocaleDateString();
  
  //instantiate today 
  let today = new Date();

  //Subtract today's date from your birthday
  let result = today - bDay;

  // console.log(today); // typeof result is number
  
  // convert miliseconds to years 
  let years = (result / 1000) / 60 / 60 / 24 / 365;
  
  //convert years into a round number
  const age = Math.floor(years);
  console.log(age);


  //writes the input to the document that is readable to the user
  document.getElementById("age").innerHTML = `Your Birthday is ${shortDate} which means you're ${age} years old!`;


  if (age >= 21) {
    console.log("Congrats you can enter this site")
  } else {
    window.location.replace("http://disneyplus.com");
  }

});













