var nanpa = ["ala","wan","tu","wan tu", "tu tu", "luka", "luka wan", "luka tu", "luka tu wan", "luka tu tu", "luka luka", "luka luka wan", "luka luka tu", "luka luka tu wan", "luka luka tu wan", "luka luka luka"]
var kule = ["loje","kasi","laso"]
function iloKule(hex) {
    var trimmed = hex.replace("#", "").substring(0,6); // trim string to just the hex RGB color string
    var split = trimmed.match(/.{1,3}/g); // split string every 2 chars
    var dec = split.map((v) => {return parseInt(v,16)}) // map string to integers
    var msd = dec.map((d) => { return Math.floor(d/16)})
    var lsd = dec.map((d) => { return d % 16 })
    var isSubtractive = 1 < (dec[0] > 127) + (dec[1] > 127) + (dec[3] > 127);    // determine if additive or subtractive color is to be used (two or more colors are closer to 00 or FF)
    
    var value = "pimeja pi "
    var base = [0,0,0]
    if(isSubtractive) {
        var base = [255, 255, 255]
        value = "walo pi "
    }
    for(var i in kule) {
        if(dec[i] < 128) {
            value += kule[i]
            base[i] = 0
        } 
    }
    value = wekaPi(value);
    value += "pi "
    for(var i in msd) {
        var val = Math.floor((base[i]-msd[i])/16); //
        if(val != "") {
            value += kule[i] + val;
        }
    }
    value = wekaPi(val);
    value += "pi "
    for(var i in msd) {
        var val = Math.floor((base[i]-msd[i])%16); //
        if(val != "") {
            value += kule[i] + val;
        }
    }
    return value

}
function hexToDec(n) {
    posN = Math.abs(n)
    var retStr = ""
    if(nanpa[n] = "ala") return "";
    retStr = nanpa[n]
    if(n < 0) {
        retStr += " ala"
    }
    return retStr;
}
function wekaPi(x) {
    if(x.substring(-2) == "pi ") {
        x += "lon"
    }
    return x;
}