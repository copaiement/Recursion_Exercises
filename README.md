# Recursion Exercises
From The Odin Project, these are some exercises in coding JS using recursive functions.

Assignment 1:
A: Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].

B: Now write another method fibsRec which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

Assignment 2:
Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.


Notes:
Everything works as desired. The code for the recursive Fibonnaci is not quite as simple as desired and could probably be made much shorter, as the recursive code and the non recursive code are the same line length. One issue I had is that using .push() does not return the full array so an extra line is needed.

The merge sort was a bit difficult to implement especially as the sort function had to be flexible enough to work with all return values down the chain and then back up. However, my solution seems to work well and is flexible enough to handle any input I have tried.
