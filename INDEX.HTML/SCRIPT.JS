var tit=document.createElement("h2")
tit.innerText="OPEN BREWARY APP"
document.body.append(tit)
var sec=document.createElement("section");
var div=document.createElement("div")
div.setAttribute("class","container")
div.innerHTML=`<input type="text" class="search" id="txt" placeholder="search by city name"></input>
<button type="button"  class="button" onclick="foo()">click here</button`
document.body.append(sec)
sec.append(div)
async function foo(atate){
   let res=await fetch (`https://api.openbrewerydb.org/breweries`);
  let res1=await res.json();
   console.log(res1)
   function brew(element) {
    var sec1=document.createElement("section");
    sec1.setAttribute("class","section")
   sec1.innerHTML=`
  <p id="name"><span>Name:</span>${element.name}</p>
      <p id="type"><span>brewery_type:</span>${element.brewery_type}</p>
      <p id="address"><span>address:</span>${element.address_2}</p>
      <p id="url"><span>URL:</span>${element.website_url}</p>
      <p id="phone"><span>Phone:</span>${element.phone}</p>`
sec.append(sec1)
   }
res1.forEach(element => {
  (brew(element))
});

}
foo(state)