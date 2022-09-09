function CopyToLabel() {

    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");

    //Reference the Label.
    
    if (name.value.length == 0 ) {
        alert("Please enter name");
        return false;
    }
    else if(phone.value.length == 0 ) {
        alert("Please enter phone");
        return false;
    }
    else if(subject.value.length == 0 ) {
        alert("Please enter subject");
        return false;
    }
    else if(message.value.length == 0 ) {
        alert("Please enter message");
        return false;
    }
    else {
    window.location.href="https://mail.google.com/mail/u/0/?fs=1&to=manalilsupermarket@gmail.com&tf=cm&su="+
            subject.value+"&body=Hi,%0D%0A"+message.value+"%0D%0A"+"%0D%0APhone:"+phone.value+"%0D%0A"+"Thanks,%0D%0A"+name.value;
    }
}

function sendwamsg() {

    var wpmsg = document.getElementById("wpmsg");
    if (wpmsg.value.length == 0 ) {
        alert("Please enter message");
        return false;
    }
    else {
    window.location.href="https://wa.me/+919446710364/?text="+
    wpmsg.value+"%0D%0A: Message redirected from website";
    }
}