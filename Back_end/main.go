package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, `{"message": "Hello from Go Backend!"}`)
	})
	fmt.Println("Server is running on port 8080...")
	http.ListenAndServe(":8080", nil)
}
