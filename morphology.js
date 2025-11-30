// ---------------- UTILITIES ----------------
function isVowel(c){ return "aeiou".includes(c); }
function isConsonant(c){ return !"aeiou".includes(c); }
function getLastVowelBlock(w){ return w.match(/(aa|ee|ii|oo|uu|a|e|i|o|u)(?=[^aeiou]*$)/); }

// ===================================================
// ABSOLUTIVE
// ===================================================
function makeAbsolutiveSingular(word){ return word.toLowerCase(); }
function makeAbsolutivePlural(word){
    word = word.toLowerCase();
    let last = word[word.length-1];
    if(last === "r"){
        let before = word.slice(0,-1);
        let vv = before.match(/(aa|ee|ii|oo|uu)$/);
        let v  = before.match(/(a|e|i|o|u)$/);
        if(vv) return word + "ota";
        if(v) return word + "oota";
    }
    if(isConsonant(last)){
        let block = getLastVowelBlock(word);
        if(!block) return word + "ota";
        if(block[0].length === 2) return word + "ota";
        return word + "oota";
    }
    let base = word.replace(/(aa|ee|ii|oo|uu|a|e|i|o|u)$/,"");
    let prev = getLastVowelBlock(base);
    if(prev && prev[0].length===2) return base + "ota";
    return base + "oota";
}

// ===================================================
// ACCUSATIVE
// ===================================================
function makeAccusative(word){ return word; }
function makeAccusativePlural(word){ return makeAbsolutivePlural(word); }

// ===================================================
// GENITIVE
// ===================================================
function makeGenitive(word){
    let absSing = makeAbsolutiveSingular(word);
    let lastChar = absSing[absSing.length-1];
    let last2 = absSing.slice(-2);
    const doubleVowels = ["aa","ee","ii","oo","uu"];
    if(doubleVowels.includes(last2)) return absSing;
    if(isVowel(lastChar)) return absSing + lastChar;
    return absSing;
}
function makeGenitivePlural(word){
    let absPlur = makeAbsolutivePlural(word);
    let last = absPlur[absPlur.length-1];
    let secondLast = absPlur[absPlur.length-2];
    let newWord = absPlur;
    if((isConsonant(secondLast) && isVowel(last)) || isVowel(last)){
        newWord = absPlur + last;
    }
    return newWord;
}

// ===================================================
// NOMINATIVE RULES
// ===================================================
function nominativeConsonantEnd(w){ if(w.length===0) return w; let last=w[w.length-1]; if(isConsonant(last)) return w+"iin"; return w; }
function nominativeDaRule(w){ if(w.endsWith("da")){ let base=w.slice(0,-2); if(isVowel(base[base.length-1])) return base+"nni"; } return w; }
function nominativeVraVlaFa(w){ 
    if(w.endsWith("ra")){ let b=w.slice(0,-2); if(isVowel(b[b.length-1])) return b+"rri"; }
    if(w.endsWith("la")){ let b=w.slice(0,-2); if(isVowel(b[b.length-1])) return b+"lli"; }
    if(w.endsWith("fa")){ let b=w.slice(0,-2); if(isVowel(b[b.length-1])) return b+"fti"; }
    return w;
}
function nominativeVCV(w){ let n=w.length; if(n<3) return w; let v1=w[n-3], c=w[n-2], v2=w[n-1]; if(isVowel(v1)&&isConsonant(c)&&isVowel(v2)) return w.slice(0,-1)+"ni"; return w; }
function nominativeCCV(w){ let n=w.length; if(n<3) return w; let c1=w[n-3], c2=w[n-2], v=w[n-1]; if(isConsonant(c1)&&isConsonant(c2)&&isVowel(v)) return w.slice(0,-1)+"i"; return w; }
function nominativeVV(w){ if(w.match(/(aa|ee|ii|oo|uu)$/)) return w+"n"; return w; }

function makeNominativePlural(word){
    let absPlur = makeAbsolutivePlural(word);
    let n0 = nominativeConsonantEnd(absPlur);
    n0 = nominativeDaRule(n0);
    n0 = nominativeVraVlaFa(n0);
    n0 = nominativeVCV(n0);
    n0 = nominativeCCV(n0);
    n0 = nominativeVV(n0);
    return n0;
}

// ===================================================
// FINAL ENGINE
// ===================================================
function processWord(){
    let w = document.getElementById("wordInput").value.trim();
    if(!w){ document.getElementById("output").innerText=""; return; }

    // Absolutive
    let absSing = makeAbsolutiveSingular(w);
    let absPlur = makeAbsolutivePlural(w);

    // Nominative
    let nomSing = nominativeConsonantEnd(absSing);
    nomSing = nominativeDaRule(nomSing);
    nomSing = nominativeVraVlaFa(nomSing);
    nomSing = nominativeVCV(nomSing);
    nomSing = nominativeCCV(nomSing);
    nomSing = nominativeVV(nomSing);
    let nomPlur = makeNominativePlural(w);

    // Accusative
    let accSing = makeAccusative(w);
    let accPlur = makeAccusativePlural(w);

    // Genitive
    let genSing = makeGenitive(w);
    let genPlur = makeGenitivePlural(w);

    document.getElementById("output").innerText=
        "Absolutive singular: "+absSing+"\n"+
        "Absolutive plural:   "+absPlur+"\n"+
        "Nominative singular: "+nomSing+"\n"+
        "Nominative plural:   "+nomPlur+"\n"+
        "Accusative singular: "+accSing+"\n"+
        "Accusative plural:   "+accPlur+"\n"+
        "Genitive singular:   "+genSing+"\n"+
        "Genitive plural:     "+genPlur;
}

// Connect button
document.getElementById("processBtn").addEventListener("click", processWord);