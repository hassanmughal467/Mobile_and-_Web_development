//Assignemnt:MATH EXPRESSIONS 
//Q1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
document.write("<h1> Question 1</h1><br>")
 var a=3;
 var b=5;
 var c=a+b;
 document.write("Sum of "+a+" and "+b+" is "+c+"<br>")
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //Q2: Repeat task1 for subtraction, multiplication, division & modulus.
 document.write("<h1> Question 2</h1><br>")
 var a=3;
 var b=5;
 var c=a-b;
 document.write("Sub of "+a+" and "+b+" is "+c+"<br>")
 var a=3;
 var b=5;
 var c=a*b;
 document.write("Mul of "+a+" and "+b+" is "+c+"<br>")
 var a=3;
 var b=5;
 var c=a/b;
 document.write("Div of "+a+" and "+b+" is "+c+"<br>")
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /*Q3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value
MATH EXPRESSIONS | JAVASCRIPT
Page 2 of 9
after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value
by 3.
l. Output : “The remainder is : 0*/
document.write("<h1> Question 3</h1><br>")
var v;
document.write("Value after declaration is "+v+"<br>")
var num=5;
document.write("Initial valur: "+num+"<br>")
num++;
document.write("Value after increment is:"+num+"<br>")
num=num+7;
document.write("after addition is: "+num+"<br>")
num--;
document.write("Value after decrement is: "+num+"<br>")
num=num%3;
document.write("The remainder is :"+num+"<br>")
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
document.write("<h1> Question 4</h1><br>")
var ticket=600;
var n=5;
document.write("Total cost to buy "+n+" tickets to a movie is "+ticket*n+" PKR <br>") 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//5. Write a script to display multiplication table of any number in your browser.
document.write("<h1> Question 5</h1><br>")
document.write("<h1> Table of 4 </h1>")
var x=4;
document.write("4 x 1 = "+x*1+"<br>"+"4 x 2 = "+x*2+"<br>"+"4 x 3 = "+x*3+"<br>"+"4 x 4 = "+x*4+"<br>"+"4 x 5 = "+x*5+"<br>"+"4 x 6 = "+x*6+"<br>"+"4 x 7 = "+x*7+"<br>"+"4 x 8 = "+x*8+"<br>"+"4 x 9 = "+x*9+"<br>"+"4 x 10 = "+x*10+"<br>")
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*6. The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”*/
document.write("<h1> Question 6 </h1><br>")
document.write("<h1> Conversion Formulae</h1><br>")
var celcius_temp=25;
var Farhenite_temp=70;
F=(celcius_temp*9/5)+32
C=(Farhenite_temp-32)*5/9;
document.write(celcius_temp+"C is "+F+"F<br>")
document.write(Farhenite_temp+"F is "+C+"C<br>")
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables*/
document.write("<h1> Question 7 </h1><br>")
var item1_price=650;
var item2_price=100;
var item1_quantity=3;
var item2_quantity=7;
var shipping_charges=100;
var total=+((item1_price*item1_quantity)+(item2_price*item2_quantity)+shipping_charges)
document.write("<h1> Shipping Cart </h1><br>")
document.write("Item of 1 price "+item1_price+"<br>"+"Quantity of item 1 is "+item1_quantity+"<br>"+"Item of 2 price"+ item2_price+"<br>"+"Quantity of item 2 is "+item2_quantity+"<br>"+"Shipping Charges "+shipping_charges+"<br>")
document.write("Total cost of your order is "+total+"<br>")
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
document.write("<h1> Question 8 </h1><br>")
document.write("<h1> Marksheet </h1><br>")
 var total_marks=500;
 var marks_obt=415;
 var percentage=(415*100)/500;
 document.write("Total marks :"+total_marks+"<br>"+"Obtained Marks :"+marks_obt+"<br>"+"Percentage :"+percentage+"%<br>")
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /*9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations 
 in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)*/

document.write("<h1> Question 9</h1><br>")
var us_dollars=10;
var saudi_riyals=25;
var dollar=104.80;
var saudi_riyal=28;
var total_currency=(us_dollars*dollar)+(saudi_riyals*saudi_riyal)
document.write("Total currency in PKR :"+total_currency+"<br>")
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*10. Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression*/

document.write("<h1> Question 10</h1><br>")
var num=32;
var y=(((num+5)*10)/2)
document.write("Perform all calculations in a single expression :"+y+"<br>")
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
11. The Age Calculator: Forgot how old someone is?
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.
*/
document.write("<h1> Question 11</h1><br>")
document.write("<h1> Age Calculator</h1><br>")
var current_year=2020;
var birth_year=1998;
var age=current_year-birth_year;
document.write("Current Year: "+current_year+"<br>"+"Birth Year :"+birth_year+"<br>"+"Your Age :"+age+"<br>")

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*12. The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The
area is NN”. (Hint : Area of a circle = π r2, π = 3.142)*/
document.write("<h1> Question 12</h1><br>")
document.write("<h1> The Geometrizer</h1><br>")
var radius=20;
var circumsference=((2*3.142)*radius)
var area=(3.142*(radius*radius))
document.write("Radius Of Circle :"+radius+"<br>"+"The circumference is :"+circumsference+"<br>"+"The area is :"+area+"<br>" )
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*13. The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is?
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.*/
document.write("<h1> Question 13</h1><br>")
document.write("<h1> The Lifetime Supply Calculator</h1><br>")
var snack="Chatty cheez";
var current_age=22;
var max_age=50;
var est_amount=2;
var total=((max_age-current_age)*365)*est_amount;
document.write("Favourite snack :"+snack+"<br>"+" Current age :"+current_age+"<br>"+"Maximum Age Estimate :"+max_age+"<br>"+"Amount of nack per day:"+est_amount+"<br>"+" You will need "+total+" to last until  the ripe old age of :"+max_age)




