{
  // types guards

  // typeof --> type guard
  type Alphanumeric = string | number
  

  const add = (
    param1: Alphanumeric,
    param2: Alphanumeric
  ): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    }
    else{
        return param1.toString() + param2.toString()
    }
  };

  const result=add(2,3);
  console.log(result)
}

// inguard


