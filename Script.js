function showResult(e) {
    e.preventDefault();
    console.log("button click");
    let sub1 = document.getElementById("subject-1").value;
    let sub2 = document.getElementById("subject-2").value;
    let sub3 = document.getElementById("subject-3").value;
    let sub4 = document.getElementById("subject-4").value;
    let sub5 = document.getElementById("subject-5").value;

    let total = parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3) + parseFloat(sub4) + parseFloat(sub5);
    let per = (total) / 5;
    let division;
    let gread;
    let result;
    if (per >= 70) {
        gread = "A";
        division = "first";
        result = "pass";
    } else if (per < 70 && per >= 60) {
        gread = "B";
        division = "first";
        result = "pass";
    } else if (per < 60 && per >= 50) {
        gread = "C";
        division = "second";
        result = "pass";
    } else if (per < 50 && per >= 40) {
        gread = "D";
        division = "third";
        result = "pass";
    } else if (per < 40 && per >= 35) {
        gread = "E";
        division = "Fourth";
        result = "pass";
    } else {
        gread = "F";
        division = "last";
        result = "fail";
    }

    document.getElementById("Result").innerHTML = "Total Marks : " + total + "<br>" +
        "Percentage : " + per + "<br>" +
        "division : " + division + "<br>" +
        "Result : " + result;

}