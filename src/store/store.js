import { useDispatch } from "react-redux";
import addMemoReducer from "../reducer/addMemoReducer";
import loginReducer from "../reducer/loginReducer";
import { configureStore } from "@reduxjs/toolkit";
// import { useId } from "react";
import { v4 as uuidv4 } from "uuid";

const store = configureStore({
  // will do 'add memo to global state'
  reducer: { login: loginReducer, memos: addMemoReducer },
});

export default store;

// LOGIN_REQUEST
export function dispatchLoginRequest(dispatch) {
  dispatch({ type: "LOGIN_REQUEST" });
}

// LOGIN_SUCCESS
export function dispatchLoginSuccess(email, dispatch) {
  try {
    // đẩy vào redux state storage
    dispatch({ type: "LOGIN_SUCCESS", payload: email });

    // và copy ngược lại từ redux vào lại 🙂
    const login = store.getState().login;

    // để sau khi refresh page lại thì nó vẫn copy ngược từ redux -> local -> redux mới sau đăng nhập
    localStorage.setItem("login", JSON.stringify({ ...login }));

    window.location.href = "/suggestions";
  } catch (error) {
    console.error("Error while setting item in localStorage:", error);
  }
}

export function getAllMemosFromLocal() {
  let memosFromLocal = JSON.parse(localStorage.getItem("memos"));

  if (!memosFromLocal) {
    return [];
  } else {
    // copy lại tất cả memos từ localStorage về lại redux
    store.dispatch({
      type: "GET_ALL_MEMOS_FROM_LOCALSTORAGE",
      payload: memosFromLocal,
    });

    return store.getState().memos;
  }
}

// ADD_MEMO
export function dispatchAddMemo(color, content, dispatch) {
  const memosGetBeforeAddNewOne = getAllMemosFromLocal();

  try {
    const memoID = uuidv4();
    // one memo insists of: color, memo's note, unique id (uuidv4)
    const newMemo = {
      id: memoID,
      color: color,
      content: content,
      complete: false,
    };

    dispatch({
      type: "ADD_MEMO",
      payload: newMemo,
    });

    console.log("State redux after adding memo: ", store.getState());

    const updatedMemos = [...memosGetBeforeAddNewOne, newMemo];

    localStorage.setItem("memos", JSON.stringify(updatedMemos));

    alert("One memo added!");
  } catch (error) {
    console.log("Error while adding memo: ", error);
  }
}

// TOGGLE
export function dispatchToggleComplete(id, dispatch) {
  dispatch({
    type: "TOGGLE_COMPLETE",
    payload: { id: id },
  });

  console.log(id);
}
