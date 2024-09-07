# ArrayList vs Vector

Both are implementations of the List interface and
are used to store dynamically resizable collections
of elements.

`ArrayList` is not synchronized. `Vector` is synchronized.
So, a `Vector` can be slower than an `ArrayList`.

`ArrayList` increases its size by 50% when it runs 
out of capacity. `Vector` doubles its size when it
needs more capacity (it grows by 100%). So, a
`Vector` consume more memory than an `ArrayList`.

`ArrayList` is faster for most single-threaded 
operations because it doesn't have the overhead
of synchronization. `Vector` is slower due to 
the overhead of synchronization.

## What if I need synchronization?

If you need thread-safe access to a list, you
should use 
`Collections.synchronizedList(new ArrayList<>())`
instead of `Vector`.


