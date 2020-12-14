var Connect = new XMLHttpRequest();
  // Define which file to open and
  // send the request.
  Connect.open("GET", "/XML/Text.xml", false);
  Connect.setRequestHeader("Content-Type", "text/xml");
  Connect.send(null);
  // Place the response in an XML document.
  var TheDocument = Connect.responseXML;
  // Place the root node in an element.
  var info = TheDocument.childNodes[1];
  var paragrafs =info.getElementsByTagName("paragraf");
  var stories=info.getElementsByTagName("story");
  var bio=info.getElementsByTagName("text");
  var indent=document.getElementsByClassName("filler");
  var character_bio=document.querySelectorAll('.character_info p');
  console.log(character_bio);
  console.log(indent);
for(var i=0;i<paragrafs.length;i++){
	indent[i].innerHTML= paragrafs[i].textContent.toString();
}
for(var i=0;i<bio.length;i++){
	character_bio[i].innerHTML=bio[i].textContent.toString();
}
var firststory=document.querySelector('.story_tell');
firststory.innerHTML=stories[1].textContent.toString();
var namen =info.getElementsByTagName("name");
var faculty =info.getElementsByTagName("faculty");
var spezialisation = info.getElementsByTagName("spezialisation");
var year =info.getElementsByTagName("year");

var footer =document.querySelectorAll('footer p');
footer[0].innerHTML=namen[0].textContent.toString();
footer[1].innerHTML=faculty[0].textContent.toString();
footer[2].innerHTML=spezialisation[0].textContent.toString();
footer[3].innerHTML=year[0].textContent.toString();
