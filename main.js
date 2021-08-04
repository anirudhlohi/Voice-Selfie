var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = ""
    recognition.start();
}
recognition.onresult = function(event){
console.log(event)
var transcript = event.results[0][0].transcript;
console.log(transcript)
document.getElementById("textbox").innerHTML = transcript
if(transcript == "take my selfie"){
    speak();
}
}
function speak(){
    var synth = window.speechSynthesis;
    var spoken = "Taking your selfie. Please wait for 5 seconds."
    var speak_this = new SpeechSynthesisUtterance(spoken)
    speak_this.pitch = 10
    speak_this.rate = 0.8
    synth.speak(speak_this)

    Webcam.set({
        width : 300 , 
        height : 250 ,
        image_format : 'jpeg',
        jpeg_quality : 90
    });
    var camera = document.getElementById("camera")
    Webcam.attach(camera)

     setTimeout(function(){
        snapshot();
        save();
     },5000)
    
}

function snapshot(){
    Webcam.snap(function (data_url){
        document.getElementById("result").innerHTML = "<img id='selfie_image' src="+data_url+">"

    })

}
 function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image
    link.click()


}