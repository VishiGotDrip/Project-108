function startIdentification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/9rVdHPzSU/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

var dog=0
var cat=0
var pig=0
var cow=0

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }

    else
    {
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("animal_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("animal_number").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        if(results[0].label=="Dog")
        {
            document.getElementById("animal_label").innerHTML='The animal making this sound is:Dog';
            dog=dog+1;
            document.getElementById("animal_number").innerHTML='The number of times this animal was detected is:'+dog;
            document.getElementById("animal_img").innerHTML="Dog.jfif";
        }

        else if(results[0].label=="Cat")
        {
            document.getElementById("animal_label").innerHTML='The animal making this sound is:Cat';
            cat=cat+1;
            document.getElementById("animal_number").innerHTML='The number of times this animal was detected is:'+cat;
        }

        else if(results[0].label=="Pig")
        {
            document.getElementById("animal_label").innerHTML='The animal making this sound is:Pig';
            pig=pig+1;
            document.getElementById("animal_number").innerHTML='The number of times this animal was detected is:'+pig;
        }
        
        else if(results[0].label=="Cow")
        {
            document.getElementById("animal_label").innerHTML='The animal making this sound is:Cow';
            cow=cow+1;
            document.getElementById("animal_number").innerHTML='The number of times this animal was detected is:'+cow;
        }
    }
}