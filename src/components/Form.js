import React from "react";
import { MdSend } from "react-icons/md";

const Form = ({
  chargeOne,
  handleCharge,
  amountOne,
  handleAmount,
  handleSubmit,
  edite,
  
}
) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="charge">Charge</label>
            <input
              type="text"
              className="form-control"
              id="charge"
              name="charge"
              value={chargeOne}
              onChange={handleCharge}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              name="amount"
              value={amountOne}
              onChange={handleAmount}
            ></input>
          </div>
        </div>
        <button className="btn" type="submit">

          { edite ? 'Edit' : 'Submit'}
          
          <MdSend className="btn-icon" />
        </button>
      </form>
    </>
  );
};

export default Form;
