
console.log("before fetch")
fetch('http://localhost:3000/animals')
. then(res => console.log(res))
console.log("after fetch")