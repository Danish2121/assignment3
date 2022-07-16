//  Question 1
document.write("<h1>Question 1</h1>");

var a = 5;
document.write("Result" + "<br>" + "The value of a is: " + a + "<br><br>");

++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + a + "<br>");
a++;
document.write("Now the value of a is: " + a + "<br><br>");

--a;
document.write("The value of --a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + a + "<br>");
a--;
document.write("Now the value of a is: " + a);


//  Question 2
document.write("<h1>Question 2</h1>");
var c = 2, b = 1;

// --c;
document.write("c is " + c + "<br>");
document.write("b is " + b + "<br>");

var result = --c - --b + ++b + b--;
document.write("Result is " + result);


//  Qquestion 3
var name = prompt("Question 3\nEnter Your name");
alert("Hello " + name);


//  Question 4
document.write("<h1>Question 5</h1>");
var tableno = +prompt("Enter table number", 5);

document.write(tableno + " x 1 = " + tableno*1 + "<br>");
document.write(tableno + " x 2 = " + tableno*2 + "<br>");
document.write(tableno + " x 3 = " + tableno*3 + "<br>");
document.write(tableno + " x 4 = " + tableno*4 + "<br>");
document.write(tableno + " x 5 = " + tableno*5 + "<br>");
document.write(tableno + " x 6 = " + tableno*6 + "<br>");
document.write(tableno + " x 7 = " + tableno*7 + "<br>");
document.write(tableno + " x 8 = " + tableno*8 + "<br>");
document.write(tableno + " x 9 = " + tableno*9 + "<br>");
document.write(tableno + " x 10 = " + tableno*10 + "<br>");


//  Question 6

document.write("<h1>Question 6</h1>");

var sub1 = prompt("Enter First Subject");
var sub2 = prompt("Enter Second Subject");
var sub3 = prompt("Enter Third Subject");
var totalpersub = 100;
var obt1 = +prompt("Enter Obtained Marks");
var obt2 = +prompt("Enter Obtained Marks");
var obt3 = +prompt("Enter Obtained Marks");
var obtainedMarks = obt1 + obt2 + obt3;
var totalMarks = 300;
var percentage = (obtainedMarks / totalMarks) * 100 + "%";

var sub1percentage = obt1/100*100 + "%";
var sub2percentage = obt2/100*100 + "%";
var sub3percentage = obt3/100*100 + "%";




document.write(`<table>
<tr>
<th>Subject</th>
<th>Total Marks</th>
<th>Obtained Marks</th>
<th>Percentage</th>
</tr>
<tr>
<td>${sub1}</td>
<td>${totalpersub}</td>
<td>${obt1}</td>
<td>${sub1percentage}</td>
</tr>
<tr>
<td>${sub2}</td>
<td>${totalpersub}</td>
<td>${obt2}</td>
<td>${sub2percentage}</td>
</tr>
<tr>
<td>${sub3}</td>
<td>${totalpersub}</td>
<td>${obt3}</td>
<td>${sub3percentage}</td>
</tr>
<tr>
<td></td>
<td><b>${totalMarks}</b></td>
<td><b>${obtainedMarks}</b></td>
<td><b>${percentage}</b></td>
</tr>
</table>`);