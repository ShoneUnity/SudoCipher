function InputText(){
    var inputVal = document.getElementById("text1").value;
    const isValidUrl = urlString=> {
        var urlPattern = new RegExp('^(https?:\\/\\/)?'+ 
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
      '(\\?[;&a-z\\d%_.~+=-]*)?'+
      '(\\#[-a-z\\d_]*)?$','i'); 
      return !!urlPattern.test(urlString)
      
    }
    var inputVal = document.getElementById("text1").value;
    var url = inputVal;
    console.log(isValidUrl(url));
    var a = isValidUrl(url);
    if(a === false)
    {
        document.getElementById("output").innerHTML = "URL Entered is invalid. Kindly enter a valid URL";
    }
    if(a === true)
    {
        if(url.includes("tenor"))
        {
            url = url.replace(/[0-9]/g, '');
            url = url.replace(/-/g,"");
            url = url.replace("https://tenor.com/view/", '');
            document.getElementById("output").innerHTML = url;

        }
        else {
            document.getElementById("output").innerHTML = "Please enter a valid Tenor link.";
        }
    }
}

$("#result").hide();
$("#btn1").hide();
$("#btn2").hide();
$("#btn3").hide();
$("#btn4").hide();
$("#btn5").hide();
$("#btn6").hide();

function LinkFind() {
    var val = document.getElementById("text2").value;
    var link1 = "https://bitly.com/" + val;
    var link2 = "https://pastebin.com/" + val;
    var link3 = "https://www.youtube.com/watch?v=" + val;
    var link4 = "https://www.twitch.tv/" + val;
    var link5 = "https://www.imgur.com/a/" + val;
    var link6 = "https://docs.google.com/file/d/" + val;
    $("#result").show();
    $("#a1").attr("href", link1);
    $("#a2").attr("href", link2);
    $("#a3").attr("href", link3);
    $("#a4").attr("href", link4);
    $("#a5").attr("href", link5);
    $("#a6").attr("href", link6);
    $("#btn1").show();
    $("#btn2").show();
    $("#btn3").show();
    $("#btn4").show();
    $("#btn5").show();
    $("#btn6").show();
}



