function calcTip() {

  /* --------------------------------Step 1: grab the input values------------------------------------------------------ */
  //sets a variable for the tip Amount selector to the VALUE of the #tipForm selector
  //sets a variable for the bill amount selector using the VALUE of the #billInput selector
  const tip = document.getElementById("tipForm").value;
  const bill = document.getElementById("billInput").value;
  const person = document.getElementById("amountOfPeople").value;
  /* ---------------------------------------Step 2: turn strings into numbers, use parseFloat() method to do this.-----------  IE: let vairable = parseFloat(stringVariable)----------------------------- */
  // sets a variable for the Tip Amount that is a number
  // sets a variable for the Bill Amount that is a number
  let tipamount = parseFloat(tip);
  let billamount = parseFloat(bill);


  /* --------------------------------Step 3: grab the elements---------------------------------------------------------- */
  // sets a var to the ID of 'bill-p'
  // sets a var to the ID of 'tip-p'
  // sets a var to the ID of 'total-p'
  let b = document.getElementById("bill-p");
  let t = document.getElementById("tip-p");
  let total = document.getElementById("total-p");
  let people = document.getElementById("total-person");

  /* --------------------------------Step 4: Place your calculations here----------------------------------------------- */
  // calulate total tip (tip % * bill) and store it in the a new variable
  // calcualte total bill (totalTip + billAmount) and store it in a new variable
  let totaltip = tipamount * billamount;
  totaltip = Math.round(totaltip * 100) / 100

  let totalbill = totaltip + billamount;
  let dividedbill = totalbill/person;
  dividedbill = Math.round(dividedbill * 100) / 100

  /* --------------------------------Step 5: Append your HTML content with the new information-----**use .fixed(2) to display the value with 2 decimal places.-------------------- */
  // change the innerHTML of the tip var from step 3 to the total tip from step 4
  // change the innerHTML of the bill var from step 3 to the total bill var from step 2
  // change the innerHTML of the total var from step 3 to the total bill var from step 4
  t.innerHTML = totaltip;
  b.innerHTML = billamount;
  total.innerHTML = totalbill;
  people.innerHTML = dividedbill;


}
