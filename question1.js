
var word="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distributionqqqqqqqqqqqqqqqqqqq of letters, as opposed to using 'Content here, content here', making it look like readable English"

var stringArray=word.split(' ');


getLargeString();

function getLargeString(){
    var max=0;
    var largeString="";
    for(var i=0;i<stringArray.length;i++)
    {
        // console.log(stringArray[i]);
        if(stringArray[i].length>max)
        {
           max=stringArray[i].length;
           largeString=stringArray[i];
        }
    }

    console.log(largeString);

}