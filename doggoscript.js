function randomDoggo() {

    //Preparing AJAX call
    var url = "https://dog.ceo/api/breeds/image/random/3";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    document.getElementById("resultinfo").innerHTML = "<h2>3 random doggos</h2>";
    
    document.getElementById("doggoPic").innerHTML = "";
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
            var pic = JSON.parse(xmlhttp.responseText);
            
            //Displaying the three pictures
            for (var i=0; i< 3; i++) {
                document.getElementById("doggoPic").innerHTML += '<img class= "pics" src="' + pic.message[i] + '">';
            }
            
        }
    }

}

function breedPic() {
    
    //Preparing the AJAX call
    var breed = document.getElementById("breed").value;
    var url = "https://dog.ceo/api/breed/" + breed + "/images/random/3";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    //Getting the name of the breed from the select element and displaying it
    var e = document.getElementById("breed");
    var title = e.options[e.selectedIndex].text;
    document.getElementById("resultinfo").innerHTML = "<h2>" + title + "</h2>";
    
    //Emptying the div where the pictures are displayed
    document.getElementById("doggoPic").innerHTML = "";
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
            
            var pic = JSON.parse(xmlhttp.responseText);
            
            //if + else incase there are less than 3 picturesof a specific breed
            if (pic.message.length >= 3) {
                for (var i=0; i< 3; i++) {
                    document.getElementById("doggoPic").innerHTML += '<img class= "pics" src="' + pic.message[i] + '">';
                }
            }
            
            else {
                for (var i=0; i< pic.message.length; i++) {
                    document.getElementById("doggoPic").innerHTML += '<img class= "pics" src="' + pic.message[i] + '">';
            }
        }
    }

    }
}

//A function so that by clicking the heading you can get more dog pictures
function newPics() {
    
    var title = document.getElementById("resultinfo").textContent;
    console.log(title);
    
    //Deciding which function to trigger
    if (title == "3 random doggos") {
        randomDoggo()
    }
    
    else {
        breedPic()
    }
}