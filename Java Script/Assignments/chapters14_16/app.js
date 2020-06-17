//ARRAYS 
//Q1. Declare an empty array using JS literal notation to store  student names in future.
document.write("<h1>Question 1</h1>")
var empty_array=[""];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Q2. Declare an empty array using JS object notation to store student names in future.
document.write("<h1>Question 2</h1>")
var empty_array=["",];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.write("<h1>Question 3</h1>")
//Q3. Declare and initialize a strings array.
var str=["hassan","ali"];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Q4. Declare and initialize a numbers array.
document.write("<h1>Question 4</h1>")
var num=[2,3,4,5];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Q5. Declare and initialize a boolean array.
document.write("<h1>Question 5</h1>")
var bol=[true,false,true];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Q6. Declare and initialize a mixed array.
document.write("<h1>Question 6</h1>")
var mix=["hassan",22,"ali",35];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Q7. Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like:
*/
document.write("<h1>Question 7</h1>")
var edu_qualifications=["SSC", "HSC", "BCS","BS", "BCOM", "MS"," M. Phil.", "PhD"];

document.write("1)"+edu_qualifications[0]+"<br>"+"2)"+edu_qualifications[1]+"<br>"+"3)"+edu_qualifications[2]+"<br>"+"4)"+edu_qualifications[3]+"<br>"+"5)"+edu_qualifications[4]+"<br>"+"6)"+edu_qualifications[5]+"<br>"+"7)"+edu_qualifications[6]+"<br>"+"8)"+edu_qualifications[7]+"<br>"+"9)"+"<br>")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Q8. Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like*/
document.write("<h1>Question 8</h1>")
var std_score=[67,87,88];
var stu_names=["ali","hassan","umer"]
document.write("Score of "+stu_names[0]+" is "+std_score[0]+".Percentage: "+(std_score[0]*100/500)+"%<br>")
document.write("Score of "+stu_names[1]+" is "+std_score[1]+".Percentage: "+(std_score[1]*100/500)+"%<br>")
document.write("Score of "+stu_names[2]+" is "+std_score[2]+".Percentage: "+(std_score[2]*100/500)+"%<br>")
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*9. Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.
c. Add two more color to the beginning of the array.
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser*/
document.write("<h1>Question 9</h1>")
color_names=["red","pink","balck","yelow"];
document.write("["+color_names+']<br>')
//a
var color=prompt("what color he/she wants to add to the beginning")
color_names.unshift(color);
document.write("<h5>Update Colors Name Array</h5>")
document.write("["+color_names+']<br>')
//b
color=prompt("what color he/she wants to add to the end")
color_names.push(color);
document.write("<h5>Update Colors Name Array</h5>")
document.write("["+color_names+']<br>')
//c
color=prompt("what first color he/she wants to add to the beginning")
var color1=prompt("what second color he/she wants to add to the beginning")
color_names.unshift(color,color1);
document.write("<h5>Update Colors Name Array</h5>")
//document.write("["+color_names[0]+','+color_names[1]+','+color_names[2]+','+color_names[3]+','+color_names[4]+','+color_names[5]+','+color_names[6]+','+color_names[7]+']<br>')
document.write("["+color_names+']<br>')
//d
color_names.shift();
document.write("<h5>Update After deleting first Color Name from Array</h5>")
document.write("["+color_names+']<br>')
//e
color_names.pop();
document.write("<h5>Update After deleting last Color Name from Array</h5>")
document.write("["+color_names+']<br>')
//f
color1=prompt("what color he/she wants to add ")
var posi= prompt("add the color to desired position/index")
color_names.splice(posi,0,color1);
document.write("<h5>Update After add Color Name at desied position in Array</h5>")
document.write("["+color_names+']<br>')
//f
posi= prompt("add the color to desired position/index")
var delete_num=prompt("how many colors want to delete")
color_names.splice(posi,delete_num);
document.write("<h5>Update After deleting Color Names at desied position in Array</h5>")
document.write("["+color_names+']<br>')
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
document.write("<h1>Question 10</h1>")
var std_score=[56,77,76,45,87,88,98]
document.write("Score Of Students:"+std_score+"<br>")
document.write("Odered Score Of Students:"+std_score.sort()+"<br>")
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities
array.*/

document.write("<h1>Question 11</h1>")
var cities_list=["karachi","lahore","islamabad","multan","hyderabad"]
selected_list=cities_list.slice(0,3);
document.write("Cities list :"+cities_list+"<br>")
document.write("Seected lsit :"+selected_list+"<br>")
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*12. Write a program to create a single string from the below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)*/
document.write("<h1>Question 12</h1>")
var arr = ["This ", " is ", "my", "cat"];
document.write("<h2>Array</h2>"+arr+"<br>")
document.write("<h2>String</h2>"+arr.join(' ')+"<br>")
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they
were stored. (FIFO-First In First Out)*/
document.write("<h1>Question 13</h1>")
var devices=['kyeboard','mouse','monitor','printer']
document.write("<h3>Devices</h3>")
document.write(devices+"<br>")
document.write("out: <br>"+devices[0]+"<br>"+"out: <br>"+devices[1]+"<br>"+"out: <br>"+devices[2]+"</br>"+"out: <br>"+devices[3]+"</br>")
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*14. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last InFirst Out)*/
document.write("<h1>Question 14</h1>")
var devices=['kyeboard','mouse','monitor','printer']
document.write("<h3>Devices</h3>")
document.write(devices+"<br>")
document.write("out: <br>"+devices[3]+"<br>"+"out: <br>"+devices[2]+"<br>"+"out: <br>"+devices[1]+"</br>"+"out: <br>"+devices[0]+"</br>")
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*15. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown/select menu in your
browser using document.write() method:*/
document.write("<h1>Question 15</h1>")
var devices=['Apple','Samsung','Motorola','Nokia','Sony','Haider'];
document.write(devices[0]+"<br>"+devices[1]+"<br>"+devices[2]+"</br>"+devices[3]+"</br>"+devices[4]+"</br>"+devices[5]+"</br>")