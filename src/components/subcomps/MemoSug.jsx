import React from "react";
import "../../custom.css";
import { useDispatch } from "react-redux";
import store, { dispatchAddMemo } from "../../store/store";

// we have color, note's content to be saved to redux global

export default function MemoSug(props) {
  const dispatch = useDispatch();

  const addMemo = () => {
    dispatchAddMemo(props.color, props.note, dispatch);
  };

  const toggleComplete = () => {
    dispatchToggleComplete();
  };

  return (
    <div key={props.id} className="flex w-[380px] justify-between mt-[13px]">
      <div
        onClick={toggleComplete}
        style={{ backgroundColor: props.color }}
        className={`w-[320px] h-[70px] rounded-lg vertical-alignment`}
      >
        <span className="ml-[13px] text-[23px]">{props.note}</span>
      </div>

      <button
        onClick={addMemo}
        className="button-container transform translate-y-[11px] text-black text-[37px] h-[47px] w-[47px] bg-gray-300 rounded-full"
      >
        +
      </button>
    </div>
  );
}
