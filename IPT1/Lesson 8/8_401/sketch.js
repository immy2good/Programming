var myVar;

function setup()
{

    createCanvas(500,500);

    myVar = 0;

    if(myVar != undefined)
    {
    
        console.log(myVar);

        console.log(10 + myVar);

        console.log("test " + myVar);


        console.log(myVar.x_pos);

        for(var i = 0; i < myVar.length; i++)
        {
            //this won't work 
        }
        
    }
    
    
    myFunc();
    
    myFunc("peas please");
    
    
}


function myFunc(myparam)
{
    if(myparam == undefined)
    {
        myparam = "default";
    }
    
    console.log(myparam);
}


