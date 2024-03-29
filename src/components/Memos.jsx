// ở đây sẽ hồi tất cả mọi redux state về những memo đã thêm
import React from "react";
import EachUsersMemo from "./subcomps/EachUsersMemo";
import { useMemo } from "react";
import store, { getAllMemosFromLocal } from "../store/store";
import { useSelector } from "react-redux";

export default function Memos() {
  // get all from ls, and then copy back to redux
  const allUsersMemos = useMemo(getAllMemosFromLocal, []);

  const useSelect = useSelector((state) => state.memos);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <p className="italic w-[380px] mt-10 mb-2 text-[28px] text-center text-gray-600">
          Here displays all the user's personal memos
        </p>

        {allUsersMemos.length > 0 ? (
          useSelect.map((eachMemo) => (
            <EachUsersMemo
              id={eachMemo.id}
              note={eachMemo.content}
              color={eachMemo.color}
              complete={eachMemo.complete}
            />
          ))
        ) : (
          <p className="mt-12 cursor-pointer text-gray-600 text-[26px]">
            No memos have made.
          </p>
        )}

        <button
          onClick={() => (window.location.href = "/suggestions")}
          className="mt-12 cursor-pointer text-gray-600 text-[26px]"
        >
          &lt;&lt; Return back to add memos.
        </button>
      </div>
    </div>
  );
}
