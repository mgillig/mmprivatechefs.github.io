
// ====================================================================
//       URL Obfuscator functions
//
// Copyright Albion Research Ltd. 2004
// http://www.albionresearch.com/
//
// You may copy these functions providing that 
// (a) you leave this copyright notice intact, and 
// (b) you include a credit on your web site 
//     with a link back to http://www.albionresarch.com/
//
// If you find or fix any bugs, please let us know at albionresearch.com
//
// ====================================================================

function HtmlEncode(s) {
    var result = "";
    for (var j = 0; j < s.length; j++) {
        // Encode 25% of characters
        if (Math.random() < 0.25
            || s.charAt(j) == ':'
            || s.charAt(j) == '@'
            || s.charAt(j) == '.') {
            var charCode = s.charCodeAt(j);
            result += "&#";
            result += charCode;
            result += ";"
        } else {
            result += s.charAt(j);
        }
    }
    return result;
}

function UrlEncode(s) {
    var HEX = "0123456789ABCDEF";
    var encoded = "";
    for (var i = 0; i < s.length; i++) {
        // Encode 25% of characters
        if (Math.random() < 0.25) {
            var charCode = s.charCodeAt(i);
            encoded += "%";
            encoded += HEX.charAt((charCode >> 4) & 0xF);
            encoded += HEX.charAt(charCode & 0xF);
        } else {
            encoded += s.charAt(i);
        }
    } // for
    return encoded;
}


function Obfuscate(plaintext) {
    //var plaintext = document.TheForm.F1.value;
    var result = "<a href='";
    result += HtmlEncode("mailto:" + UrlEncode(plaintext));
    result += "'>";
    result += HtmlEncode(plaintext);
    result += "</a>";

    return result;
};

