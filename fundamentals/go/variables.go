package main

import (
    "fmt"
    "math/cmplx"
)

func main() {
    // Tipos básicos
    var (
        i int = 42
        f float64 = 3.14
        b bool = true
        s string = "Hello, Go!"
    )

    // Tipos inteiros
    var (
        uint8Val uint8 = 255
        int16Val int16 = -32768
        int32Val int32 = 2147483647
        int64Val int64 = -9223372036854775808
    )

    // Tipos flutuantes
    var (
        float32Val float32 = 3.14159
        float64Val float64 = 2.718281828459045
    )

    // Tipo complexo
    var complexVal complex128 = cmplx.Sqrt(-5 + 12i)

    // Tipos compostos
    var (
        arr [3]int = [3]int{1, 2, 3}
        slice []int = []int{4, 5, 6}
        m map[string]int = map[string]int{"a": 1, "b": 2}
        ch chan int = make(chan int)
    )

    // Struct
    type Person struct {
        Name string
        Age  int
    }
    p := Person{Name: "John", Age: 30}

    // Imprimindo os valores
    fmt.Println("Basic Types:")
    fmt.Println("int:", i)
    fmt.Println("float64:", f)
    fmt.Println("bool:", b)
    fmt.Println("string:", s)

    fmt.Println("\nInteger Types:")
    fmt.Println("uint8:", uint8Val)
    fmt.Println("int16:", int16Val)
    fmt.Println("int32:", int32Val)
    fmt.Println("int64:", int64Val)

    fmt.Println("\nFloating-point Types:")
    fmt.Println("float32:", float32Val)
    fmt.Println("float64:", float64Val)

    fmt.Println("\nComplex Type:")
    fmt.Println("complex128:", complexVal)

    fmt.Println("\nComposite Types:")
    fmt.Println("Array:", arr)
    fmt.Println("Slice:", slice)
    fmt.Println("Map:", m)

    fmt.Println("Channel (uninitialized):", ch)

    fmt.Println("\nStruct:")
    fmt.Println("Person:", p)
}
