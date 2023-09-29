// # level1-1
const txt= document.querySelector("#text1");
txt.addEventListener("click" , () => {
    console.log("##### level1-1 #####");
    console.log("Du hast mich gedrücht");;
})

// # level1-5
const btn= document.querySelector("#clickMe");
let anzahl= 0;
btn.addEventListener("click", () => {
    anzahl++;
    btn.innerHTML = `Click me: ${anzahl}`;
})

// # level1-6
const dropdown = document.querySelector("#drop");
const output= document.querySelector("#resultSelect");
dropdown.addEventListener("change", () => {
    output.innerHTML= `Sie haben ${dropdown.value} ausgäwehlt`;
})

// # level1-9 
const removeColor = () =>{
    color.remove(color.selectedIndex);
}
const color= document.querySelector("#farbeAuswahlen");
const btnRemove= document.querySelector("#button");
btnRemove.addEventListener("click", removeColor);

// # level2-4 
const setBodyColor = () =>{
    let color="";
    switch (color2.value) {
        case "Medium Orchid":
            color= ((color2.value).replaceAll(" ","")).toLowerCase();
            document.body.style.background= color;
            break;
        case "Mint Cream":
            color= ((color2.value).replaceAll(" ","")).toLowerCase();
            document.body.style.background= color;
            break;
        case "Dodger Blue":
            color= ((color2.value).replaceAll(" ","")).toLowerCase();
            document.body.style.background= color;
            break;
        case "Goldenrod":
            color= ((color2.value).replaceAll(" ","")).toLowerCase();
            document.body.style.background= color;
            break;
        case "Wheat":
            color= ((color2.value).replaceAll(" ","")).toLowerCase();
            document.body.style.background= color;
            break;
        case "Medium Turquoise":
            color= ((color2.value).replaceAll(" ","")).toLowerCase();
            document.body.style.background= color;
            break;
        case "Moccasin":
            color= ((color2.value).replaceAll(" ","")).toLowerCase();
            document.body.style.background= color;
            break;
        case "Fire Brick":
            color= ((color2.value).replaceAll(" ","")).toLowerCase();
            document.body.style.background= color;
            break;
        case "Lime Green":
            color= ((color2.value).replaceAll(" ","")).toLowerCase();
            document.body.style.background= color;
            break;
        case "Slate Gray":
            color= ((color2.value).replaceAll(" ","")).toLowerCase();
            document.body.style.background= color;
            break;
        default:
            break;
    }
}
const color2= document.querySelector("#farbeAuswahlen2");
const btnRemove2= document.querySelector("#button2");
btnRemove2.addEventListener("click", setBodyColor);