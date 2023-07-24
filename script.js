let input = document.querySelector("input")
let btn = document.querySelector("button")
let cards = document.querySelector(".cardsContainer")
let lodingImg = document.querySelector(".loding")
let valid = document.querySelector(".valid")
console.log(lodingImg)
let search;
// let arr = []



btn.addEventListener("click", () => {
    lodingImg.style.display = "block"
    if (input.value == "") {
        searchvalidation()
    }
     else {

        search = input.value
        fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${search}`)
            .then(res => res.json())
            .then(data => {

                let searchResult = data.query.search
                renderResuts(searchResult)
            })
            .catch("network Error")
    }
let atag = document.querySelectorAll("a")
if(atag.length == 0){
    // alert("empty")
}

})



function renderResuts(searchResult) {
    for (let j = 0; j < searchResult.length; j++) {
        // console.log(searchValue[j]);
        // let nameInnerText = document.createElement('li')
        // let name = searchValue[j].title
        // console.log(name)
        // nameInnerText.innerText = name;
        // formContainer.append(nameInnerText)

        let link = document.createElement("a")
        link.setAttribute("target", "_blank")
        link.href = `https://en.wikipedia.org/?curid=${searchResult[j].pageid}`

        // let div = document.createElement("div")
        // div.setAttribute("class","cardDiv")
        let h3 = document.createElement("h3")
        let pTag = document.createElement("p")

        h3.innerText = searchResult[j].title
        pTag.innerHTML = searchResult[j].snippet

        link.append(h3)
        link.append(pTag)
        cards.append(link)
        lodingImg.style.display = "none"


    }
}


function searchvalidation(){
    let p = document.createElement("p")
    p.innerText = "Please Insert any value"

    p.style.color='red'
    p.style.textAlign ='center'
    valid.append(p)
    lodingImg.style.display = "none"
    setTimeout(() => {
        valid.remove()
    }, 1000);
}






