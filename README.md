What would you do differently if you had more time? <br />
Make a clean HashMap, that would store ip address and their counts
in a higher bucket if their count increases.  That would make
sorting and retrieving the top100 ip addresses more efficient.

What is the runtime complexity of each function? <br />
function request_handled : constant time, <br />
function top100 : O(n), <br />
function clear : constant time,  <br />
function quicksort : O(n log(n))<br />
<br />
How does your code work?<br />
Ip addresses are stored as keys in an object, with the value being the number
of times the function is called with that ip address.<br />
When request_handle is called it searches the object to see if the ip address already exsits, <br />
if so it adds 1 to the count, if not, if creates the key value pair of the ip address 
with a count of 1.

Function top100 receives the object which stores the ip addresses and their count .
An array is then created which only consists of the counts.<br />
The goal is to find the value of the 100th highest count. <br />
In order to do this, the quickSort function is used to sort the counts
in a more efficient manner than using a .sort().<br />
Once the values are sorted, the length of the array is determined, then 
the 100th highest value is identified in the array.<br />
Now that we have this value, we loop through the object, and 
create a new array of ip addresses whose counts are greater than or equal
to the 100th highest value.


What other approaches did you decide not to pursue?<br />
I implemented and pondered of a few different methods to sort the counts.<br />
I determined quickSort would be pretty efficient.<br />
I made a hash function to convert each string of the ip address to a number,<br />
and explored HashMaps.  To me it seems the ip addresses could be stored then<br />
moved into different buckets depending on the increase in count.<br />


How would you test this?<br />
First unit tests can be ran for each function.  Ensuring we are getting
proper values and types.<br />
The function performance.now() can be used to determine the speed 
of function top100.<br />  A function could generate an object of 
20 million key value pairs, which could be used to test the speed of
top100()<br />
Also, if more time were given, you would want to setup the api and 
run end to end testing.