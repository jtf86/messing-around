const word = "WORD";

let wordspan = document.getElementById("word");

wordspan.parentElement
        .parentElement
        .children[0]
        .style
        .color = "red";

wordspan.innerHTML = "I AM TEXT";

wordspan.style
        .color = "blue";

function next() {
    let wordspan2 = document.getElementById("word2");
    wordspan2.innerHTML = "I AM MORE TEXT";
    function smile(){
        return wordspan2;
    }
    return smile();
}

next();

alert(next().innerHTML);