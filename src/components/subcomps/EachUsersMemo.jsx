import React from "react";
import "../../custom.css";
import { useDispatch } from "react-redux";
import { dispatchDeleteMemo, dispatchToggleComplete } from "../../store/store";

// we have color, note's content to be saved to redux global

export default function EachUsersMemo(props) {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    dispatchToggleComplete(props.id, dispatch);
  };

  const deleteThisNote = () => {
    if (window.confirm("Are you sure?")) {
      dispatchDeleteMemo(props.id, dispatch);
    }
  };

  return (
    <div key={props.id} className="flex w-[520px] mt-[13px]">
      <div
        onClick={toggleComplete}
        style={{ backgroundColor: props.color }}
        className={`w-[320px] h-[70px] flex space-x-[155px] rounded-lg vertical-alignment`}
      >
        <span
          className={`ml-[13px] text-[23px] ${
            props.complete ? "line-through" : ""
          }`}
        >
          {props.note}
        </span>

        <div
          className={`h-[18px] w-[18px] ${
            props.complete ? "bg-gray-300" : "bg-white"
          } rounded-full border border-solid`}
        ></div>
      </div>
      <div
        onClick={deleteThisNote}
        className="text-white bg-red-500 w-[50px] h-[20px]"
      >
        Delete
      </div>
    </div>
  );
}
