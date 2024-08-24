# Thread Safety

When you have a multi-thread system, you must
look out for the safety of the operations. Two
threads could try to modify the same resource at
the same time. Who would win that race? What would
be the final result?

For that reason, it's necessary to implement
thread-safety mechanisms.

## Mutual Exclusion

Only one thread can use the resource at a time.
When a thread is about to use a resource, it
must acquire the "lock" and then release it at
the end. In the meantime, other threads cannot
use the resource.

In Java, we can implement mutual exclusion using
the keyword `synchronized` in a method or block scope.

## Semaphore

It allows you to define several threads that
can operate at the same time. When the semaphore is
green the threads can start using the resource and
releasing it as soon as it finishes using it. Eventually,
the semaphore becomes red and the threads can't use
resources anymore.

In Java, you can create a semaphore by using the util class
`java.util.concurrent.Semaphore`.