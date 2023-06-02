
fetch("/data.json")
.then((res)=>{
     return res.json();
})
.then((json)=>{
    console.log(json)
})



