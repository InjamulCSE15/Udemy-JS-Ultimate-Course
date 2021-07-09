console.log("hello world");

// # Example:

var myObj, x;
myObj = {
  name: "Injamul",
  age: 25,
  city: "Chittagong"
}

console.log(myObj);
x = myObj.name ;
document.getElementById('sample').innerHTML = x;

/* JSON vs XML:
    Both JSON and XML can be used to receive data from a web server.
    
    # JSON is Like XML Because:

    Both JSON and XML are "self describing" (human readable)
    Both JSON and XML are hierarchical (values within values)
    Both JSON and XML can be parsed and used by lots of programming languages
    Both JSON and XML can be fetched with an XMLHttpRequest

    # JSON is Unlike XML Because:

    JSON doesn't use end tag
    JSON is shorter
    JSON is quicker to read and write
    JSON can use arrays

    => The biggest difference is:

    XML has to be parsed with an XML parser. JSON can be parsed by a standard JavaScript function. 

    # Why JSON is Better Than XML

    XML is much more difficult to parse than JSON.
    JSON is parsed into a ready-to-use JavaScript object.

    =======================================================================

    # DATA TYPES: 
    
    01. String
    {"name": "Injamul" }
    
    02. Number 
    {"age": 25}
    
    03. Object
    {
    "player":{ "name":"Messi", "age":25, "score": 50.05}
    } 
    
    04. Array
    {
    "employee":[ "Sakil", "Vikram", "Rahul" ]
    }

    05. Boolean
    { "result" : true }

    06. Null
    {"grade" : null}

    ========================================================================================

    # Parse:
    Parse the data with JSON.parse() and the data becomes a JavaScript Object.

    =========================================================================================

    # Stringify:
    To convert an object into a string use JSON.stringify()

    =========================================================================================

    # Objects:
    JSON Objects are surrounded by curly brackets {} which is written in key/value pairs and key must be strings, and values must be a valid JSON data type(string, number, array, object, boolean or null). Keys and values are separated by a colon ';' and each key or value pair is separated by a comma ','.

    =========================================================================================

    # Arrays:
    Arrays in JSON are almost the same as arrays in JavaScript. In JSON array values must be type of string, number, object, array, boolean or null. In Javascript array values can be all of the about 



*/