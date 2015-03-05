// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
    // your code here
    var results = [];

    var privateFunc = function(root) {
        if (root.classList) {
            var classArray = Array.prototype.slice.call(root.classList);
            if (classArray.indexOf(className) >= 0) {
               results.push(root);
            }
        }

        if (root.childNodes.length === 0) {
            return;
        }

        for (var i = 0; i < root.childNodes.length; i++) {
            privateFunc(root.childNodes[i]);
        }

    };
    
    privateFunc(document.body);
    return results;
};
