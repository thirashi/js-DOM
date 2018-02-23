/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var tSwiftElement=document.getElementById('name1');
tSwiftElement.innerHTML="Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/
var djKhaledElement=document.getElementById("position2");
djKhaledElement.innerHTML="Project Manager";


/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var pTaroElement=document.getElementById("alias3");
pTaroElement.innerHTML="Concatenation";


/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.
*/
var princeElement=document.getElementsByClassName("profile")[0];
princeElement.innerHTML="Im not a human I am a dove I'm your conscious I am love";



/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var bLeeElement=document.getElementsByClassName("profile")[1];
bLeeElement.innerHTML="Mistakes are always forgivable, if one has the courage to admit them";


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var sJacksonElement=document.getElementsByClassName("alias")[2];
sJacksonElement.innerHTML="Mace Windu";

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var pGriffinName=document.createElement("div");
pGriffinName.id="name7";
pGriffinName.innerHTML="Peter Griffin";
nameParent.appendChild(pGriffinName);



 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var tDuncanElement=document.createElement("div");
tDuncanElement.id="alias8s";
tDuncanElement.innerHTML="Old Man Riverwalk";
aliasParent.appendChild(tDuncanElement);



//Final Boss
/*9. Create your own profile.*/

