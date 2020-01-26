    const findTwoBiggestElements = array => 
    {
    let [ num1, num2 ] = array.slice(0, 2);
  
    if (num1 < num2) 
    {
      const temp = num2;
      num2 = num1;
      num1 = temp;
    }
  
    array.slice(0, 2).forEach(num => 
    {  
      if (num > num1) 
      {
        num1 = num;
      }
  
      if (num > num2) 
      {
        num2 = num;
      }
    });
  
    return [ num1, num2 ];
    };
  

    const bigestSumOfTwoElements = array => 
    {
        if (!array.length) 
        {
            return false;
        }
  
        if (array.length === 1) 
        {
            return array[0];
        }
  
        if (array.length === 2) 
        {
            return array[0] + array[1];
        }
  
        const [ biggestNumber, secondBiggestNumber ] = findTwoBiggestElements(array);
  
        return biggestNumber + secondBiggestNumber;
    };
  


    console.log(bigestSumOfTwoElements([ 1, 2, 3, 4 ])); // => 7
    console.log(bigestSumOfTwoElements([])); // => false
    console.log(bigestSumOfTwoElements([ 76 ])); // => 76
    console.log(bigestSumOfTwoElements([ 23, 45, 17, 12 ])); // => 68