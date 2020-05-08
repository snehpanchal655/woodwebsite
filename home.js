
function ageInDays() {
    var birthyear = prompt('Whats your birth year?');
    var days = (2020 - birthyear) * 365;
    var hours = days*24;
    var minutes=hours*60;
    var sec= minutes*60; 
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('Hey you are ' + days + ' days old. You live for ' + hours + ' hours, ' + minutes + '  minutes and ' + sec + ' sec doing nothing except being bitch(Krina)  HAPPY BIRTHDAY ');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}