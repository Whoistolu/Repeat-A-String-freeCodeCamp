// function repeatStringNumTimes(str, num) {
//     if (num < 0) return "";
//     return str.repeat(num);
//     }
//     return str;
//   }
//   console.log("hello".repeat(3))

function repeatStringNumTimes(str, num) {
    let output = "";
    if (num < 0) {
        return "";
    }
    for (var i=0; i < num; i++) {
            output += str;
        }
    return output;
  }
  
  repeatStringNumTimes("abc", 6);