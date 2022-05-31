let numberOneTriangle = (num) => {
    let string = "";
    if (num > 1 && num <= 10) {
      for (let i = 1; i <= num; i++) {
        for (let j = 0; j < i; j++) {
          string += "*";
        }
        string += "\n";
      }
    }
    console.log(string)
  }