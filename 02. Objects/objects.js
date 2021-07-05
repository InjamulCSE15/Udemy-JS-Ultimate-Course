console.log("hello world")

// About Object methods: 

// Create an object: 
  var mySelf= {
    firstName :"Injamul Alam",
    lastName : "Ismam",
    id: 01506404,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  }
  // Display on browser data from the object: 
  document.getElementById("methods").innerHTML=mySelf.fullName();
  console.log(mySelf); // for testing 
