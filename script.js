// var hoursList = [{hour:"9AM"},{hour:"10AM"},{hour:"11AM"},{hour:"12PM"},{hour:"1PM"},{hour:"2pm"},{hour:"3pm"},{hour:"4pm"},{hour:"5pm"}];

// const moment = require("moment");

// // var textButtonEl = document.getElementById("textButton"); //set this up to discern what textButton we're in
// // var textRowsEl = [
// // var textArea9 =  document.getElementById("textArea9") ;
// // var textButton9 = document.getElementById("textButton9");
// // var textArea10 = document.getElementById("textArea10") ;
// // var textButton10 = document.getElementById("textButton10");
// // var textArea11 = document.getElementById("textArea11") ;
// // var textButton11 = document.getElementById("textButton11");
// // var textArea12 = document.getElementById("textArea12") ;
// // var textButton12 = document.getElementById("textButton12");
// // var textArea1 = document.getElementById("textArea1") ;
// // var textButton1 = document.getElementById("textButton1");
// // var textArea2 = document.getElementById("textArea2") ;
// // var textButton2 = document.getElementById("textButton2");
// // var textArea3 = document.getElementById("textArea3") ;
// // var textButton3 = document.getElementById("textButton3");
// // var textArea4 = document.getElementById("textArea4") ;
// // var textButton4 = document.getElementById("textButton4");
// // var textArea5 = document.getElementById("textArea5") ;
// // var textButton5 = document.getElementById("textButton5");
// // var textAreaEl = document.getElementById("textArea"); //set this up to discern what text area we're in

// // var currentHour = `hour-${hourNumber}`; //set this up to discern what hour we're in
// // for (i=0;i<hoursList.length;i++) {
// // }
//     textButton9.addEventListener("click", function(){
//         // userInput = textRowsEl[i].text.value;//text from text area gets stored into that var 
//         userInput = document.getElementById("textArea9");
//         console.log(userInput)
//         // localStorage.setItem(currentHour, userInput); //depending on what hour box you clicked on, push the text into the respective localstorage spot
//     })

//     textButton10.addEventListener("click", function(){
//         // userInput = textRowsEl[i].text.value;//text from text area gets stored into that var 
//         // userInput = document.getElementById("textArea10");
//         console.log(document.getElementById("textArea9"))
//         // localStorage.setItem(currentHour, userInput); //depending on what hour box you clicked on, push the text into the respective localstorage spot
//     })
    
//     textButton11.addEventListener("click", function(){
//         // userInput = textRowsEl[i].text.value;//text from text area gets stored into that var 
//         userInput = document.getElementById("textArea11").val;
//         console.log(userInput)
//         // localStorage.setItem(currentHour, userInput); //depending on what hour box you clicked on, push the text into the respective localstorage spot
//     })

//     textButton12.addEventListener("click", function(){
//         // userInput = textRowsEl[i].text.value;//text from text area gets stored into that var 
//         userInput = document.getElementById("textArea12").val;
//         console.log(userInput)
//         // localStorage.setItem(currentHour, userInput); //depending on what hour box you clicked on, push the text into the respective localstorage spot
//     })
//     textButton1.addEventListener("click", function(){
//         // userInput = textRowsEl[i].text.value;//text from text area gets stored into that var 
//         userInput = document.getElementById("textArea1").val;
//         console.log(userInput)
//         // localStorage.setItem(currentHour, userInput); //depending on what hour box you clicked on, push the text into the respective localstorage spot
//     })

//     textButton2.addEventListener("click", function(){
//         // userInput = textRowsEl[i].text.value;//text from text area gets stored into that var 
//         userInput = document.getElementById("textArea2").val;
//         console.log(userInput)
//         // localStorage.setItem(currentHour, userInput); //depending on what hour box you clicked on, push the text into the respective localstorage spot
//     })

//     textButton3.addEventListener("click", function(){
//         // userInput = textRowsEl[i].text.value;//text from text area gets stored into that var 
//         userInput = document.getElementById("textArea3").val;
//         console.log(userInput)
//         // localStorage.setItem(currentHour, userInput); //depending on what hour box you clicked on, push the text into the respective localstorage spot
//     })

//     textButton4.addEventListener("click", function(){
//         // userInput = textRowsEl[i].text.value;//text from text area gets stored into that var 
//         userInput = document.getElementById("textArea4").val;
//         console.log(userInput)
//         // localStorage.setItem(currentHour, userInput); //depending on what hour box you clicked on, push the text into the respective localstorage spot
//     })

//     textButton5.addEventListener("click", function(){
//         // userInput = textRowsEl[i].text.value;//text from text area gets stored into that var 
//         userInput = document.getElementById("textArea5").val;
//         console.log(userInput)
//         // localStorage.setItem(currentHour, userInput); //depending on what hour box you clicked on, push the text into the respective localstorage spot
//     })



// function boxFiller (){
//     // for(i = 0; i < )
//     // textAreaEl.append(localStorage.getItem(currentHour , userInput))
// }

// boxFiller();


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

$(document).ready(function(){
    $(".saveBtn").on("click",function(){
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time , value);

    });

    function timeCounter(){
        var currentTime = moment().hours();
        $(".time-block").each(function(){
            var blockTime = parseInt($(this).attr("id").split("-")[1]);
            if (currentTime > blockTime){
                $(this).addClass("past");
            } else if(currentTime === blockTime){
                $(this).removeClass("past");
                $(this).addClass("present")
            }  else{
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    timeCounter();

    var interval = setInterval(timeCounter , 10000);

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-1"));
    $("#hour-14 .description").val(localStorage.getItem("hour-2"));
    $("#hour-15 .description").val(localStorage.getItem("hour-3"));
    $("#hour-16 .description").val(localStorage.getItem("hour-4"));
    $("#hour-17 .description").val(localStorage.getItem("hour-5"));





    $("#currentDay").text(moment().format("dddd, MMMM Do"));

})

















