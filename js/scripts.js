var word = "WORD";

var wordspan = document.getElementById("word");
wordspan.parentElement
        .parentElement
        .children[1]
        .style
        .color = "red";
wordspan.innerHTML = "I AM TEXT";
wordspan.style.color = "blue";

