//IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS 
/*1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).*/
document.write("<h1>Question 1</h1>")
var char=prompt("Enter number or string:")

if (char>='A' && char<='Z')
{
document.write(char+" is upper case")
}
else if (char>='a' && char<='z')
{
document.write(char+" is lower case")
}
else
{
    document.write(char+" is number")
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.*/
document.write("<h1>Question 2</h1>")
var integer1=+prompt("Enter integer1 :")
var integer2=+prompt("Enter integer2 :")

if (integer1>integer2 )
{
document.write(integer1+" is greater than "+integer2)
}
else if (integer1<integer2)
{
    document.write(integer1+" is less than "+integer2)
}
else if (integer1==integer2)
{
    document.write(integer1+" is equal "+integer2)
}
else
{
    document.write("please enter not other input like string")
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.*/
document.write("<h1>Question 3</h1>")
var integer1=+prompt("Enter number :")

if (integer1>0)
{
document.write(integer1+" is psoitive ")
}
else if (integer1<0)
{
    document.write(integer1+" is negative")
}
else if (integer1==0)
{
    document.write(integer1+" is zero")
}
else
{
    document.write("please enter only integer to check")
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
/*4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise*/
document.write("<h1>Question 4</h1>")
var char=prompt("Enter character to check vowel:")

if (char.length==1)
{
 if (char=='a'||char=='i'||char=='e'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U')
{
    document.write(char+" is vowel")
}
else
{
    document.write(char+" is not vowel ")
}
}
else{
    document.write("please enter single character to check vowel or not")
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”
ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise.*/
document.write("<h1>Question 5</h1>")
var password=prompt("Enter password :")
var pass="hassan";
if (password === "")
{
    alert("Please enter your password :")
    password=prompt("Enter password")
}
else if (password==pass)
{
document.write(password+" Correct! The password you entered matches the original password")
}
else
{
    document.write(char+" Incorrect password ")
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}*/
document.write("<h1>Question 6</h1>")
var greeting;
var hour = 13;
if (hour < 18) 
{
greeting = "Good day";
document.write(greeting)}
else{
greeting = "Good evening";
document.write(greeting)
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\
/*7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements*/
document.write("<h1>Question 7</h1>")
var time=prompt("Enter time :")
if (time>=0000 && time<1200)
{
    document.write("Good Morning")
}
else if (time>=1200 && time<1700)
{
    document.write("Good afternoon")
}
else if (time>=1700 && time<2100)
{
    
    document.write("Good evening")
}
else if (time>=2100 && time<=2359)
{
    
    document.write("Good Night")
}
else{
    document.write("time is not in 24 hour format")
}
