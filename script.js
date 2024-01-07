var index = 0;

function performMiracle(){
    var givenColor = ["blue", "green", "yellow", "pink", "grey", "lavender", "purple"];
    var switchText = {
     "Papa is that Scratch Programming Guru" : 'I told you, them colors has changed',
     "Papa is the cutest person here in CIH" : 'Yaaay! What are you going to do?', 
     "It is a flex if you are talking to Papa" : 'Changed again, you pained?',
     "Papa is so loving and tolerating" : 'Fuck you, I have done it again',
     "And When I say Papa, I mean OBO, Ayomi, AY Boy" : 'Okay, Okay, cut the bullshit!'
}
    
    var papaDiscription = Object.keys(switchText);
    var activateSwitchText = papaDiscription[Math.floor(Math.random() * papaDiscription.length)];
    var output = switchText[activateSwitchText];

    document.getElementById("subtopic").innerHTML = output;
    document.getElementById("Papa").innerHTML = activateSwitchText;

    document.getElementsByTagName("body")[0].
    style.background = givenColor[index++];

    if(index > givenColor.length - 1){
        index = 0;
    }
} 
