//let list: string[] = ["Sam", "12", "Australia", "Sydney"]; //Not ideal
let details: string[] = [];
details["name"] = "Sam";
details["age"] = 12;
details["country"] = "Australia";
details["capital"] = "Sydney";

let queryString = '?';
for(let key in details) {
    queryString += key + '=' + details[key] + '&';
}
queryString = queryString.slice(0, queryString.length - 1); //Remove the trailing &
console.log(queryString);
