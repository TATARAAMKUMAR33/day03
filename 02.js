// Question 2 : Use the rest countries API URL ->https://restcountries.com/v3.1/all and display all the country flags in the console */

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function (){
  var res=JSON.parse(request.response);
  console.log(res);
  for(var i=0;i<res.length;i++){
    console.log(res[i].name.common);
}

// capital & name

for(var i=0;i<res.length;i++){
    if(res[i].capital){
        console.log(res[i].capital[0]+" "+res[i].area);
    }
    else{
        console.log("Invalid Capital"+" "+res[i].area); 
    }
}

//country flags
for(var i=0;i<res.length;i++){
    console.log(res[i].name.common+" "+res[i].flags.png);
}

//name region subregion population
for(var i=0;i<res.length;i++){
    console.log("Name: "+res[i].name.common+" Region: "+res[i].region+" Sub-Region: "+res[i].subregion+" Population:  "+res[i].population);
}
} 
