let searchInputEI = document.getElementById("searchInput")



searchInputEI.addEventListener("keydown",searchWikipedia)


function searchWikipedia(event){

if(event.key === "Enter"){


let searchInput = searchInputEI.value 

let option = {
    method:"GET"
}
let URL = "https://apis.ccbp.in/wiki-search?search=" + searchInput
fetch(URL,option)
.then(function(response){
    return response.json()
}).then((data)=>{
    console.log(data)
})












}
}