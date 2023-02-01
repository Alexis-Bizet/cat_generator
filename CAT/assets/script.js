let generateBtn= document.querySelector(".btn-generate");


generateBtn.addEventListener("click", fetchPics);

function fetchPics(){
    let catDiv = document.querySelector(".pics-cats")
    catDiv.innerHTML = ''
    fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data)=>{
        let catsImgUrl = data[0].url;

        let catsImgEl = document.createElement("img")
        catsImgEl.setAttribute('src',`${catsImgUrl}`)
        catsImgEl.classList.add('show-cats')

        let catDiv = document.querySelector(".pics-cats")
        catDiv.appendChild(catsImgEl)
    })
}