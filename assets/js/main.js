console.log("test");


/* 




*/


let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

console.log(studentData)
console.table(studentData)


/*
function 
  soll ausgeben
      name
      coop
      city
      emails
       */

function outputDate(){
    studentData.forEach((i) => {
        document.write(`${i.name}, <br> ${i.coop}, <br> ${i.address.city}, <br> ${i.emails} <br> <br>`)
        console.log(`${i.name}, <br> ${i.coop}, <br> ${i.address.city}, <br> ${i.emails} <br> <br>`)
        console.log(i.name)
        console.log(i.coop)
        console.log(i.address.city)
        console.log(i.emails)
    })
}

outputDate()