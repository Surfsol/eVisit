What would you do differently if you had more time?
Make a clean HashMap, that would store ip address and their counts
in a higher bucket if their count increases.  That would make
sorting and retrieving the top100 ip addresses more efficient.

What is the runtime complexity of each function?
function request_handled : constant time
function top100 : O(n)
function clear : constant time
function quicksort : O(n log(n))

How does your code work?
Ip addresses are stored as keys in an object, with the value being the number
of times the function is called with that ip address.  When request_handle is called 
it searches the object to see if the ip address already exsits , 
if so it adds 1 to the count , if not if creates the key value pair of the ip address 
with a count of 1.

Function top100 receives the object which stores the ip addresses and their count .
An array is then created which only consists of the counts.
The goal is to find the value of the 100th highest count. 
In order to do this, the quickSort function is used to sort the counts
in a more efficient manner than using a .sort().  Counts are sorted in an array.
Once the values are sorted, the length of the array is determined, then 
the 100th highest value is identified in the array.
Now that we have this value, we loop through the object, and 
create a new array of ip addresses whose counts are greater than or equal
to the 100th highest value.


What other approaches did you decide not to pursue?
I implemented and pondered of a few different methods to sort the counts.
I determined quickSort would be pretty efficient.
I made a hash function to convert each string of the ip address to a number,
and explored HashMaps.  To me it seems the ip addresses could be stored then
moved into different buckets depending on the increase in count.


How would you test this?
First unit tests can be ran for each function.  Ensuring we are getting
proper values and types.
the function  performance.now() can be used to determine the speed 
of the function top100.  A function could generate an object of 
20 million key value pairs, which could be used to test the speed of
top100()
Also, if more time were given, you would want to setup the api and 
run end to end testing.