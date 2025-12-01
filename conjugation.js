function processVerb(verb){
    verb = verb.toLowerCase().trim();
    // Remove infinitive "uu"
    if(verb.endsWith("uu")){
        verb = verb.slice(0, -2);
    }
    let root = verb;
    let nutiForm, atiForm, isheeForm, isinForm;
    if(root.endsWith("ooch")){
        let base = root.slice(0,); // remove "ch"
        let past = {
            Ani:   base + "e",
            Ati:   base + "ite",
            Inni:  base + "e",
            Isheen: base + "ite",
            Nuti:  base + "ine",
            Isin:  base + "itan",
            Isaan: base + "an"
        };
        let result = "Verb Conjugation (Simple Past Tense):\n";
        for(let s in past){
            result += s + ": " + past[s] + "\n";
        }
        return result;
    }
    if(root.endsWith("och")){
        let base = root.slice(0, -2); // remove "ch"
        let past = {
            Ani:   base + "dhe",
            Ati:   base + "ote",
            Inni:  base + "dhe",
            Isheen: base + "ote",
            Nuti:  base + "one",
            Isin:  base + "otan",
            Isaan: base + "dhan"
        };
        let result = "Verb Conjugation (Simple Past Tense):\n";
        for(let s in past){
            result += s + ": " + past[s] + "\n";
        }
        return result;
    }
    if(root.endsWith("ach")){
        let base = root.slice(0,-2); // remove "ch"
        let past = {
            Ani:   base + "dhe",
            Ati:   base + "tte",
            Inni:  base + "te",
            Isheen: base + "tte",
            Nuti:  base + "nne",
            Isin:  base + "ttan",
            Isaan: base + "tan"
        };
        let result = "Verb Conjugation (Simple Past Tense):\n";
        for(let s in past){
            result += s + ": " + past[s] + "\n";
        }
        return result;
    }
    if(root.endsWith("eech")){
        let base = root.slice(0,); // remove "ch"
        let past = {
            Ani:   base + "e",
            Ati:   base + "ite",
            Inni:  base + "e",
            Isheen: base + "ite",
            Nuti:  base + "ine",
            Isin:  base + "itan",
            Isaan: base + "an"
        };
        let result = "Verb Conjugation (Simple Past Tense):\n";
        for(let s in past){
            result += s + ": " + past[s] + "\n";
        }
        return result;
    }
    if(root.endsWith("ech")){
        let base = root.slice(0, -2); // remove "ch"
        let past = {
            Ani:   base + "dhe",
            Ati:   base + "tte",
            Inni:  base + "dhe",
            Isheen: base + "tte",
            Nuti:  base + "nne",
            Isin:  base + "ttan",
            Isaan: base + "dhan"
        };
        let result = "Verb Conjugation (Simple Past Tense):\n";
        for(let s in past){
            result += s + ": " + past[s] + "\n";
        }
        return result;
    }
    if(root.endsWith("uch")){
        let base = root.slice(0,); // remove "ch"
        let past = {
            Ani:   base + "e",
            Ati:   base + "ite",
            Inni:  base + "e",
            Isheen: base + "ite",
            Nuti:  base + "ine",
            Isin:  base + "itan",
            Isaan: base + "an"
        };
        let result = "Verb Conjugation (Simple Past Tense):\n";
        for(let s in past){
            result += s + ": " + past[s] + "\n";
        }
        return result;
    }
    if(root.endsWith("odh")){
        let base = root.slice(0, -2); // remove "ch"
        let past = {
            Ani:   base + "dhe",
            Ati:   base + "ote",
            Inni:  base + "dhe",
            Isheen: base + "ote",
            Nuti:  base + "one",
            Isin:  base + "otan",
            Isaan: base + "dhan"
        };
        let result = "Verb Conjugation (Simple Past Tense):\n";
        for(let s in past){
            result += s + ": " + past[s] + "\n";
        }
        return result;
    }
    if(root.endsWith("yy")){
        let base = root.slice(0, ); // remove "ch"
        let past = {
            Ani:   base + "e",
            Ati:   base + "ite",
            Inni:  base + "e",
            Ishee: base + "ite",
            Nuti:  base + "ine",
            Isin:  base + "itan",
            Isaan: base + "an"
        };
        let result = "Verb Conjugation (Simple Past Tense):\n";
        for(let s in past){
            result += s + ": " + past[s] + "\n";
        }
        return result;
    }
    const ccPattern = /[bcdfghjklmnpqrstvwxz]{2}$/;
    if(ccPattern.test(root)){
        nutiForm  = root + "ine";
        atiForm   = root + "ite";
        isheeForm = root + "ite";
        isinForm  = root + "itan";
    }
    else if(root.endsWith("aaw")){
        let base = root.slice(0,-3);
        nutiForm = base + "oofne";
        atiForm   = base + "oofte";
        isheeForm = base + "oofte";
        isinForm  = base + "ooftan";
    }
    else if(root.endsWith("aw")){
        let base = root.slice(0,-2);
        nutiForm = base + "oofne";
        atiForm   = base + "oofte";
        isheeForm = base + "oofte";
        isinForm  = base + "ooftan";
    }
    else if(root.endsWith("aay")){
        let base = root.slice(0,-3);
        nutiForm = base + "oofne";
        atiForm   = base + "oofte";
        isheeForm = base + "oofte";
        isinForm  = base + "ooftan";
    }
    else if(root.endsWith("aah")){
        let base = root.slice(0,-3);
        nutiForm = base + "oofne";
        atiForm   = base + "oofte";
        isheeForm = base + "oofte";
        isinForm  = base + "ooftan";
    }
    else if(root.endsWith("ooh")){
        let base = root.slice(0,-3);
        nutiForm = base + "oone";
        atiForm   = base + "oote";
        isheeForm = base + "oote";
        isinForm  = base + "ootan";
    }
    else if(root.endsWith("uu'")){
        let base = root.slice(0,-2);
        nutiForm = base + "une";
        atiForm   = base + "ute";
        isheeForm = base + "ute";
        isinForm  = base + "utan";
    }
    else if(root.endsWith("u'")){
        let base = root.slice(0,-1);
        nutiForm = base + "une";
        atiForm   = base + "ute";
        isheeForm = base + "ute";
        isinForm  = base + "utan";
    }
    else if(root.endsWith("aa'")){
        let base = root.slice(0,-2);
        nutiForm = base + "ane";
        atiForm   = base + "ate";
        isheeForm = base + "ate";
        isinForm  = base + "atan";
    }
    else if(root.endsWith("a'")){
        let base = root.slice(0,-1);
        nutiForm = base + "ane";
        atiForm   = base + "ate";
        isheeForm = base + "ate";
        isinForm  = base + "atan";
    }
    else if(root.endsWith("l")){
        nutiForm = root + "le";
        atiForm   = root + "te";
        isheeForm = root + "te";
        isinForm  = root + "tan";
    }
    else if(root.endsWith("d")){
        nutiForm = root.slice(0,-1) + "nne";
        atiForm   = root + "de";
        isheeForm = root + "de";
        isinForm  = root + "dan";
    }
    else if(root.endsWith("b")){
        nutiForm = root + "ne";
        atiForm   = root + "de";
        isheeForm = root + "de";
        isinForm  = root + "dan";
    }
    else if(root.endsWith("c")){
        nutiForm = root + "ine";
        atiForm   = root + "ite";
        isheeForm = root + "ite";
        isinForm  = root + "itan";
    }
    else if(root.endsWith("g")){
        nutiForm = root + "ne";
        atiForm   = root + "de";
        isheeForm = root + "de";
        isinForm  = root + "dan";
    }
    else if(root.endsWith("j")){
        nutiForm = root + "ne";
        atiForm   = root + "je";
        isheeForm = root + "je";
        isinForm  = root + "jan";
    }
    else if(root.endsWith("q")){
        nutiForm = root + "ne";
        atiForm   = root + "xe";
        isheeForm = root + "xe";
        isinForm  = root + "xan";
    }
    else if(root.endsWith("r")){
        nutiForm = root + "re";
        atiForm   = root + "te";
        isheeForm = root + "te";
        isinForm  = root + "tan";
    }
    else if(root.endsWith("x")){
        nutiForm = root + "ne";
        atiForm   = root + "xe";
        isheeForm = root + "xe";
        isinForm  = root + "xan";
    }
    else {
        nutiForm = root + "ne";
        atiForm   = root + "te";
        isheeForm = root + "te";
        isinForm  = root + "tan";
    }
    let past = {
        Ani:   root + "e",
        Ati:   atiForm,
        Inni:  root + "e",
        Isheen: isheeForm,
        Nuti:  nutiForm,
        Isin:  isinForm,
        Isaan: root + "an"
    };
    let result = "Verb Conjugation (Simple Past Tense):\n";
    for(let s in past){
        result += s + ": " + past[s] + "\n";
    }
    return result;
}