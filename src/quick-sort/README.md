# Quick Sort

FreeCodeCamp explanation:

> Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Visualizing how it works:

![quick sort](https://upload.wikimedia.org/wikipedia/commons/9/9c/Quicksort-example.gif)

Quick sort is a very efficient sorting method, providing $O(n \log n)$ performance on average. It is also relatively easy to implement. 