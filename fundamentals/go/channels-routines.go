package main

import (
      "fmt"
      "time"
)

func SauceMaker(c chan<- string) {
      startTime := time.Now().UnixMilli()
      fmt.Println("Making the sauce: heating olive oil ")
      time.Sleep(1 * time.Second)
      fmt.Println("Making the sauce: browing the garlic ")
      time.Sleep(2 * time.Second)
      fmt.Println("Making the sauce: browing the onions")
      time.Sleep(2 * time.Second)
      fmt.Println("Making the sauce: cooking the meatballs")
      time.Sleep(5 * time.Second)
      fmt.Println("Making the sauce: cooking the diced tomatoes")
      time.Sleep(3 * time.Second)
      endTime := time.Now().UnixMilli()
      fmt.Printf("making the sauce took %f seconds\n", (float64(endTime)-float64(startTime))/1000)

      c <- "sauce"
}

func PastaMaker(c chan<- string) {
      startTime := time.Now().UnixMilli()
      fmt.Println("Making the pasta: boiling water")
      time.Sleep(8 * time.Second)
      fmt.Println("Making the pasta: cooking pasta")
      time.Sleep(4 * time.Second)
      endTime := time.Now().UnixMilli()
      fmt.Printf("making the pasta took %f seconds\n", (float64(endTime)-float64(startTime))/1000)

      c <- "cooked pasta"
}

func main() {
      sauce := make(chan string)
      pasta := make(chan string)

      startTime := time.Now().UnixMilli()
      go SauceMaker(sauce)
      go PastaMaker(pasta)

      // wait for both to be completed.
      // Reading from a channel is a locking operation,
      // hence, this line will not be executed until both
      // channels have been written
      fmt.Printf("%s and %s are done\n", <-sauce, <-pasta)
      endTime := time.Now().UnixMilli()
      fmt.Printf("cooking dinner took %f seconds\n", (float64(endTime)-float64(startTime))/1000)

}