document.getElementById("processBtn").addEventListener("click", function(){
    let w = document.getElementById("wordInput").value.trim();
    if(!w){ document.getElementById("output").innerText=""; return; }

    let type = document.querySelector('input[name="wordType"]:checked').value;

    if(type === "noun"){
        document.getElementById("output").innerText = processNoun(w); // morphology.js
    } else if(type === "verb"){
        document.getElementById("output").innerText = processVerb(w); // conjugation.js
    }
});