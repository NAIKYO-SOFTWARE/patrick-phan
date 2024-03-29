// memos list redux state
const initialState = [];

const addMemoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_MEMOS_FROM_LOCALSTORAGE":
      return [...action.payload];
    // add one memo
    case "ADD_MEMO":
      return [
        ...state,
        {
          id: action.payload.id,
          color: action.payload.color,
          content: action.payload.content,
          complete: false,
        },
      ];
    // !complete
    case "TOGGLE_COMPLETE":
      return state.map((memo) =>
        memo.id === action.payload.id
          ? { ...memo, complete: !memo.complete }
          : memo
      );
    default:
      return state;
  }
};

export default addMemoReducer;
