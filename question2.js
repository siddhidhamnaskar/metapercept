

var array= [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0]

var max=0;
for(var i=0;i<array.length;i++)
{
    if(array[i]>max)
    {
        max=array[i];
    }
    else if(array[i].length>1){
    for(var j=0;j<array[i].length;j++)
    {
        if(array[i][j]>max)
        {
            max=array[i][j];
        }
        else if(array[i][j].length>1)
        {
            for(var k=0;j<array[i][j].length;k++)
            {
                if(array[i][j][k]>max)
                {
                    max=array[i][j][k];
                }
            }
        }
    }
   }
}

console.log(max);