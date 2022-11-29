# Merge Sort

FreeCodeCamp explanation:

> Merge sort uses a divide-and-conquer, recursive methodology to sort an array. It takes advantage of the fact that it is relatively easy to sort two arrays as long as each is sorted in the first place. [...] One array as input, so how do we get to two sorted arrays from that? Well, we can recursively divide the original input in two until we reach the base case of an array with one item. A single-item array is naturally sorted, so then we can start combining. This combination will unwind the recursive calls that split the original array, eventually producing a final sorted array of all the elements.

So, the steps are:

1. Recursively split the input array in half until a sub-array with only one element is produced;
2. Merge each sorted sub-array together to produce the final sorted array.

You can visualize this idea with the following gif:

![merge sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif?20151222172210)

Merge sort is an efficient sorting method, with time complexity of $O(n \log n)$. This algorithm is popular because it is performant and relatively easy to implement.