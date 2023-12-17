// let admin ;

// let name;

// name = "John"

// admin = name;

// alert(admin);


// const ourPlanet = "Earth";

// const currentUserName = "Jon Snow";

let userCheck = prompt("Who's there?", "");

if (userCheck == "Admin") { let userPassword= prompt("Enter Password", "");

if (userPassword == "TheMaster") {alert("Welcome");}

else if (userPassword=="Cancel" || userPassword == "" || userPassword == null ) { alert("Canceled");}

else {alert("Wrong Password");}

} 

else if (userCheck=="Cancel" || userCheck == null || userCheck =="") {alert("Canceled");}

 else {alert("I don't know you!");}



