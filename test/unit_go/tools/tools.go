package tools

import "errors"

var ErrorIndexOutOfRange = errors.New("index out of range")

func ElementAtIndex(i int, elements []int) (result int, err error) {
	if i < 0 || i >= len(elements) {
		err = ErrorIndexOutOfRange
		return
	}

	result = elements[i]
	return
}
