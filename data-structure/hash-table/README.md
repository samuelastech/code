To access the index of a hash table, and of arrays in general, is a constant
operation in the worst-case scenario — $O(1)$. It means it's extremely efficient.

People normally use prime numbers in the hash function and the table size. It
happens because there's something magic about that kind of number. Prime numbers
help to avoid repetitive patterns, which don't happen with common numbers. So,
by doing this, we avoid collisions — different keys to the same index.

There's the `loadFactor`. The closest you get to one, the more fluid the
performance of your table is. When you get over it, it's pretty bad.