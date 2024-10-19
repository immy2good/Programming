var numArray = [];
function setup()
{
    for(var i = 0; i < 100; i++){
        numArray.push(round(random(0, 1000)));
    }
    
    //find the smallest value in the array
    //and its index
    var highestValue = 0;
    var highestIndex =0;
    var lowValue = null;
    var lowIndex =0;

    for (var i =0; i < numArray.length; i++)
    {
        if (numArray[i] > highestValue )
            {
               highestValue = numArray[i];
               highestIndex = i;
            }
        if (lowValue == null || numArray[i] < lowValue)
            {
                lowValue = numArray[i];
                lowIndex = i;
            } 
  
        
    }
    console.log("Highest Value is : " + highestValue + " and its index is " + highestIndex)
    console.log("Lowest Value is : " + lowValue + " and its index is " + lowIndex)

    
}

function draw()
{
    
}


