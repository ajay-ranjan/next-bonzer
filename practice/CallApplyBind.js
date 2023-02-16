// CALL
    // const person = {
    //     fullName: function() {
    //       return this.firstName + " " + this.lastName;
    //     }
    //   }
    //   const person1 = {
    //     firstName:"John",
    //     lastName: "Doe"
    //   }
    //   const person2 = {
    //     firstName:"Mary",
    //     lastName: "Doe"
    //   }
    //   document.getElementById("demo").innerHTML = person.fullName.call(person1); 
    const person = {
        fullName: function(city, country) {
          return this.firstName + " " + this.lastName + "," + city + "," + country;
        }
      }
      
      const person1 = {
        firstName:"John",
        lastName: "Doe"
      }
      
      const person2 = {
        firstName:"Mary",
        lastName: "Doe"
      }
      
      document.getElementById("demo").innerHTML = person.fullName.call(person1, "Oslo", "Norway"); 

  

//   APPLY


//   BIND