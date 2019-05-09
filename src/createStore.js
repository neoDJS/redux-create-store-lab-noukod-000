export default function createStore(reducer) {
  // add your code here
    let state;

    function dispatch(action) {
      state = reducer(state, action);
      render();
    }

    function getState() {
      return state;
    };

    return {
      dispatch,
      getState
    };
}

function render() {
  const container = document.getElementById('container');
}


function createStore(reducer) {
};

function changeCount(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
}


function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

let store = createStore(changeCount) // createStore takes the changeCount reducer as an argument
store.dispatch({ type: '@@INIT' });
let button = document.getElementById('button');

button.addEventListener('click', function() {
  store.dispatch({ type: 'INCREASE_COUNT' });
});
