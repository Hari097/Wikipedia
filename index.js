let searchInputEI = document.getElementById("searchInput")
let searchResults = document.getElementById("searchResults")
let sppinerEl = document.getElementById("spinner")


let creatAndAppendElement = (result)=>{ 
    let {link,title,description} = result

    //create item container 
    let resultItemEI = document.createElement("div")
    resultItemEI.classList.add("result-item") 

    //create title content
    let titleElementEI = document.createElement("a")
    titleElementEI.href = link 
    titleElementEI.textContent = title 
    titleElementEI.target = "_blank" 
    titleElementEI.classList.add("result-title")
    resultItemEI.appendChild(titleElementEI)

    // create break after title
    let titleBreake = document.createElement("br")
    resultItemEI.appendChild(titleBreake)

    // create URL Link content 
    let URLElement =  document.createElement("a")
    URLElement.textContent = link 
    URLElement.href = link
    URLElement.target = "_blank" 
    URLElement.classList.add("result-url")
    resultItemEI.appendChild(URLElement)
    
    // create break after title
    let URLBreake = document.createElement("br")
    resultItemEI.appendChild(URLBreake)
  
    //create describtion after     
    let describtionElement = document.createElement("p")
    describtionElement.textContent = description 
    describtionElement.classList.add("link-description")
    resultItemEI.appendChild(describtionElement)

    searchResults.appendChild(resultItemEI)
}

function displayResult(search_Result){

    sppinerEl.classList.toggle("d-none")

    for (let result of search_Result){
        creatAndAppendElement(result)
    }

}

function searchWikipedia(event){

if(event.key === "Enter"){

        searchResults.textContent = ""
        sppinerEl.classList.toggle("d-none")
        let searchInput = searchInputEI.value 

        let option = {
            method:"GET"
        }

        let URL = "https://apis.ccbp.in/wiki-search?search=" + searchInput
        
        fetch(URL,option)
        .then(function(response){
            return response.json()
        }).then((data)=>{
            let  {search_results } = data 
            
            displayResult(search_results)
        })
}
}

searchInputEI.addEventListener("keydown",searchWikipedia)