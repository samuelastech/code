let state = [];

/** Non-pure function - modifies the original state */
function doSomething(item) {
  state.push(item);
}

/** Pure function - returns a new state */
function doSomethingPure(currentState, item) {
  return [...currentState, item];
}

state = doSomethingPure();