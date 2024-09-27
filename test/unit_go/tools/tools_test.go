package tools_test

import (
	"testing"
	"tools/tools"
)

func TestElementAtIndex_ExistingIndex(t *testing.T) {
	elements := []int{1, 2, 3, 4, 5, 6, 7, 8}
	i := 0
	expected := 1
	result, err := tools.ElementAtIndex(i, elements)

	if err != nil {
		t.Errorf("Unexpected error: %s", err.Error())
		return
	}

	if result != expected {
		t.Errorf("Expected %d, got %d", expected, result)
		return
	}
}

func TestElementAtIndex_NonExistingIndex(t *testing.T) {
	elements := []int{1, 2, 3, 4, 5, 6, 7, 8}
	i := len(elements)
	_, err := tools.ElementAtIndex(i, elements)

	if err == nil {
		t.Fatal("Expected error, got nil")
	}

	if err != tools.ErrorIndexOutOfRange {
		t.Fatalf("Expected %s, got %d", tools.ErrorIndexOutOfRange.Error(), err.Error())
	}
}
