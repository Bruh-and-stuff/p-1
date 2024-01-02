//https://teachablemachine.withgoogle.com/models/uKAYg3Pkm/model.json
function startrecord(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })

    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/uKAYg3Pkm/model.json", modelLoad)
}
    function modelLoad(){
        console.log("We have loaded")
        classifier.classify(gotResults)
    }

    function gotResults(error, result){
        if(error){
            console.error(error)
        }
        else{
            console.log(result)
        }
    }