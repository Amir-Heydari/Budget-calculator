import React from "react";
import Item from "./Item";
import { MdDelete } from "react-icons/md";

const List = ({ expenseTwo,clearItems,editeItem,deleteItem }) => {
  return (
    <>
      <ul className="list">
        {expenseTwo.map((expenseTwo) => {
          return <Item key={expenseTwo.id} expenseThree={expenseTwo}  deleteItem={deleteItem} editeItem={editeItem}  />;
        })}
      </ul>

      {expenseTwo.length > 0 && (
        <button className="btn" onClick={clearItems} >
          Clear
          <MdDelete className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default List;
