// Arrow Function fungsinya seperti ini

const information = (data) => {
    const process = `Yang anda perlu ketahui tentang saya adalah ${data}`;
    return process;
  };
  
  console.log(information("saya suka membaca novel."));

// Exercise 3

  const yearUntilRetirement = (year, firstName, age) => {
      const retirement = 65 - age;
      const retireFuture = year + retirement;
      const alreadyRetired = age*age/age-65;
      const retirePast = year - alreadyRetired;
      if(retirement > 0){
          console.log(`${firstName} will retire in ${retirement} years, in the year ${retireFuture}.`);
      }
      else{
          console.log(`${firstName} has already retired ${alreadyRetired} years ago in ${retirePast}.`);
      }
  }

  console.log(yearUntilRetirement(2020, "John", 28));

  console.log(yearUntilRetirement(2020, "Bruno", 89));