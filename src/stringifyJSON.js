// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var JSONstr = "";
  
  if (Array.isArray(obj)) {
    JSONstr += "[";

    for (var i = 0; i < obj.length; i++) {
      JSONstr += stringifyJSON(obj[i]) + ",";
    }
    if (i > 0) {
      JSONstr = JSONstr.slice(0, JSONstr.length - 1);
    }

    JSONstr += "]";
  } else if (typeof obj === "object" && obj !== null) {
    JSONstr += "{";

    for (var prop in obj) {
      var temp = stringifyJSON(obj[prop]);
      if (temp === undefined) {
        continue;
      }
      JSONstr += "\"" + prop + "\"" + ":";
      JSONstr += temp + ",";
    }
    if (JSONstr.charAt(JSONstr.length - 1) === ",") {
      JSONstr = JSONstr.slice(0, JSONstr.length - 1);
    }

    JSONstr += "}";
  } else if (typeof obj === "string") {
    JSONstr += "\"" + obj + "\"";
  } else if (typeof obj === "function" || obj === undefined) {
    //indicate that this isn't right
    return;
  } else {
    //for number, boolean or null values
    JSONstr += obj;
  }
  
  return JSONstr;
};
