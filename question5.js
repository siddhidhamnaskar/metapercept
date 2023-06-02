
var input="test01*gmail.com"


validEmail();

function validEmail(){

    var validString="moc.liamg@"
     var j=0;
    for(var i=input.length-1;i>=0;i--)
    {
      if(input[i]===validString[j])
      {
       j++;

      }
      else if(j>9)
      {
        console.log("Valid Email Id")
        break;
      }
      else{
        console.log("Invalid Email Id");
        break
      }
    }

}



