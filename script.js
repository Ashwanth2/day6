//1.class movie
// a)
 public Movie("t","s","r") {
     title ="t";
     studio = "s";
      rating = "r";
 }

// b)
 public Movie ("t","s") {
     title ="t";
     studio ="s";
    rating = "PG";
 }
// c)
 public static Movie[] getPG(Movie[] mov) {
         Movie[] pgMov = new Movie[mov.length];
    int newArrayIndex = 0;
    for (let i=0; i<mov.length; i++) {
    if (mov[i].rating = ("PG")) {
     pgMov[newArrayIndex] = mov[i];
  newArrayIndex++;
 }
   }
   return pgMov;
// }
// d)
Movie mov = new Movie("Casino Royale","Eon Productions","PG-13");

//2)
var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/typescript-oops/master/images/ClassDiagram_Circle.png');
 request.send();
//3)
//Write a “person” class to hold all the details
class person{
    constructor(Name,sex,age,salary)
    this.name= name
    this.sex=sex
    this.age=age
    this.salary=salary
}
fun1(){
    console.log(`hello ${person.name}`);
}
let t1 = new person('kavi','male','23',50000)
t1.fun()

//4)
// calculate the uber price
let baseFee = .44
let cities = ["Providence", "Boston", "New York", ]
let uberRates = [5, 10, 15]
let customerName = "Wendy" //prompt("What is your name?")
let customerCity = "Providence" //prompt("What is your city?")
console.log("Hello", customerName+ ", welcome to the Uber Rate Program")
function getRate(customerCity) {
  function uberRate(customerCity, index) {
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}
//call the getRate function passing in the customerCity arugment
getRate(customerCity)
