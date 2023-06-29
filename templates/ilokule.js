var nanpa = ["ala","wan","tu","wan tu", "tu tu", "luka", "luka wan", "luka tu", "luka tu wan", "luka tu tu", "luka luka", "luka luka wan", "luka luka tu", "luka luka tu wan", "luka luka tu wan", "luka luka luka"]
var kule = ["loje","kasi","telo"]
function iloKule(hex) {
    var trimmed = hex.replace("#", "").substring(0,6); // trim string to just the hex RGB color string
    var split = trimmed.match(/.{1,2}/g); // split string every 2 chars
    var dec = split.map((v) => {return parseInt(v,16)}) // map string to integers
    var msd = dec.map((d) => { return Math.floor(d/16)})
    //console.log(msd);
    var lsd = dec.map((d) => { return d % 16 })
    //console.log(lsd);
    var isSubtractive = 1 < (dec[0] > 127) + (dec[1] > 127) + (dec[3] > 127);    // determine if additive or subtractive color is to be used (two or more colors are closer to 00 or FF)
    
    
    if(isSubtractive) {
        var base = [255, 255, 255]
        value = "walo pi "
        for(var i in kule) {
            if(dec[i] < 128) {
                value += kule[i] + " "
                base[i] = 0
            } 
        }
    } else {
        var value = "pimeja pi "
        var base = [0,0,0]
        for(var i in kule) {
            if(dec[i] > 127) {
                value += kule[i] + " "
                base[i] = 255
            } 
        }
    }
    

    value = wekaPi(value);
    value += "pi "
    for(var i in msd) {
        var val = hexToDec(Math.floor((base[i]/16)-msd[i])); //
        
        if(val != "") {
            value += kule[i] + " " + val + " ";
        }
        //console.log(value)
    }
    
    value = wekaPi(value);
    value += "pi "
    for(var i in lsd) {
        var diff = ((base[i]>0)*15) -(lsd[i] % 16)
        //console.log(diff)
        var val = hexToDec(diff);
        //console.log(val)
        if(val != "") {
            value += kule[i] + " " + val + " ";
        }
        //console.log(value)
    }
    
    value = wekaPi(value);
    return value

}
function oLili(s) {
    for(var i in nanpa) {
        var s = s.replaceAll(nanpa[nanpa.length-i], nanpa.length-i)
    }
    for(var i in kule) {
        var s = s.replaceAll(kule[i], kule[i].substring(0,1).toUpperCase())
    }
    var s = s.replaceAll("walo","W")
    var s = s.replaceAll("pimeja","P")
    var s = s.replaceAll("ala","x")
    var s = s.replaceAll("pi",".")
    var s = s.replaceAll("lon","*")
    var s = s.replaceAll(" ","")
    return s;
}

function hexToDec(n) {
    posN = Math.abs(n)
    var retStr = ""
    if(nanpa[posN] == "ala") return "";
    
    if(posN > 7) {
        retStr = nanpa[15-posN]
        retStr += " ala"
    } else {
        retStr = nanpa[posN]
    }
    return retStr;
}
function wekaPi(x) {
    //console.log(x)
    if(x.substr(-3) == "pi ") {
        x = x + "lon "
    }
    //console.log(x)
    return x;
}