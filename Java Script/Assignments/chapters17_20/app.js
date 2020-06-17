//ARRAYS AND LOOP 
//1. Declare and initialize an empty multidimensional array. (Array of arrays)
document.write("<h1> Question 1</h1>")
var mul_array=[[],[],[]];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2. Declare and initialize a multidimensional array representing the following matrix:
document.write("<h1> Question 2</h1>")
var mul_array=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for (var i=0; i<3; i++)
{
    for (var j=0; j<4; j++)
    {
        document.write(mul_array[i][j])
    }
    document.write("<br>")
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Q3. Write a program to print numeric counting from 1 to 10.
document.write("<h1> Question 3</h1>")
var n=1;
for (var i=0; i<=10; i++)
{
    document.write(n+"<br>")
    n++;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
document.write("<h1> Question 4</h1>")
var n=prompt("Enter a number to shownit multiplication table",1)
var l=prompt("Enter a length multiplication table",10)
document.write("Multiplication table of "+n+" <br>")
document.write("Length: "+l+" <br>")
for (var i=1; i<=l; i++)
{
    document.write(n+" x "+i+" = "+n*i+"<br>")

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Q5. Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”]
*/
document.write("<h1> Question 5</h1>")
fruits = ["apple", "banana", "mango", "orange","strawberry"]
for (var i=0; i<5; i++)
{
    document.write("Element at index "+i+" is "+fruits[i]+"<br>")
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*Q6. Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k*/
document.write("<h1> Question 6</h1>")
document.write("<h3>Counting</h3>")
for (var i=0; i<=15; i++)
{
    document.write(i+",")
}
document.write("<h3>Reverse Counting</h3>")
for (var i=10; i>=1; i--)
{
    document.write(i+",")
}
document.write("<h3>Even</h3>")
for (var i=0; i<=20; i++)
{
    if (i%2==0)
    {
    document.write(i+",")
    }
}
document.write("<h3>Odd</h3>")
for (var i=0; i<=20; i++)
{
    if (i%2!=0)
    {
    document.write(i+",")
    }
}
document.write("<h3>Series</h3>")
for (var i=0; i<=20; i++)
{
    if (i%2==0)
    {
    document.write(i+"k,")
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not. Example:*/
document.write("<h1> Question 7</h1>")
var a=["cake","apple pie","cookie","chips","patties"]
var item=prompt("Enter item to check: ")
var match=false;
for (var i=0; i<6; i++)
{
    if (item==a[i])
    {
        match=true
        alert(item+" is available at index "+i+" in our bakery")
    }

}
if (match===false)
{
    alert("We are sorry! "+item+" is not availabe in our bakery")
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*8. Write a program to identify the largest number in the
given array.
A = [24, 53, 78, 91, 12].*/
document.write("<h1> Question 8</h1>")
var A = [24, 53, 78, 91,12];
var largest="";
for(var i=0; i<5; i++)
{
 if (largest==="")
 {
     largest=A[i]
 }
 else if(A[i]>largest)
 {
     largest=A[i]
 }

}
document.write("Array items: "+A+"<br>")
document.write(" The Largest number is: "+largest)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*\Q9. Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12]*/
document.write("<h1> Question 9</h1>")
var A = [24, 53, 78, 91,12];
var smallest="";
for(var i=0; i<5; i++)
{
 if (smallest==="")
 {
     smallest=A[i]
 }
 else if(A[i]<smallest)
 {
     smallest=A[i]
 }

}
document.write("Array items: "+A+"<br>")
document.write(" The Smallest number is: "+smallest)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//10. Write a program to print multiples of 5 ranging 1 to 100.
document.write("<h1> Question 10</h1>")
for (var i=1; i<=100; i++)
{
    if (i%5==0)
    {
    document.write(i+",")
    }
}