


let addbtn = document.getElementById("addbtn");
let timeInput = document.getElementById("timeInput");
let routineList = document.getElementById("routineList");

addbtn.addEventListener("click", function () {
    let time = timeInput.value;


    if (time == "") {
        alert("please insert the time")
        return;
    }

    let box = document.createElement("div")
    box.textContent = "⏰   " + time + " - my Routine";
    box.style.padding = "10px"
    box.style.margin = "20px"
    box.style.borderRadius = "10px"
    box.style.backgroundColor = "gray"
    routineList.append(box);
    timeInput.value = "";

});





