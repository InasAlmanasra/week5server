
var xhr; // define the global variable to process the AJAX request
function callDivChange() {
xhr = new XMLHttpRequest();
var filename = document.getElementById("filename").value;
xhr.open("GET", filename, true);
xhr.onreadystatechange = processDivChange;
try {
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
}
catch (e) {
// this only works in internet explorer
}
var client;
function processData(postString) {
client = new XMLHttpRequest();
client.open('POST','http://developer.cege.ucl.ac.uk:30260/uploadData',true);
client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
client.onreadystatechange = dataUploaded;
client.send(postString);
}
// create the code to wait for the response from the data server, and process the response once it is received
function dataUploaded() {
// this function listens out for the server to say that the data is ready - i.e. has state 4
if (client.readyState == 4) {
// change the DIV to show the response
document.getElementById("dataUploadResult").innerHTML = client.responseText;
xhr.send();
function processDivChange() {
if (xhr.readyState < 4) // while waiting response from server
document.getElementById('div1').innerHTML = "Loading...";
else if (xhr.readyState === 4) { // 4 = Response from server has been completely loaded.
if (xhr.status == 200 && xhr.status < 300)
// http status between 200 to 299 are all successful
document.getElementById('div1').innerHTML = xhr.responseText;
}
}

