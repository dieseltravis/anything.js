function morse( string ){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@?.,- ";
    var morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", ".--.-.", "..--..", ".-.-.-", "--..--", "-....-", "   "]
    var newString = "";
    for(i = 0; i < string.length; i++){
        var index = chars.indexOf(string[i]);
        if (index != -1) {
            newString += morse[index] + " ";
        }
    }
    return newString;
}

anything.prototype.morse = morse;
