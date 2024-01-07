import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPriceAction } from "../../store/price/priceSlice";
import "./SelectPrice.scss";

const SelectPrice = () => {
  const dispatch = useDispatch();
  const selectedAction = useSelector((state) => state.price.selectedAction);

  const handleActionClick = (action) => {
    dispatch(setPriceAction(action));
  };

  return (
    <div className="price">
      <div className="donar">
        <div className="actions">
          <button
            onClick={() => handleActionClick("default")}
            className={
              selectedAction === "default" ? "button active" : "button"
            }
          >
            Una vez
          </button>
          <button
            onClick={() => handleActionClick("extended")}
            className={
              selectedAction === "extended" ? "button active" : "button"
            }
          >
            Mensual
          </button>
        </div>
        <div className="buttons">
          {(selectedAction === "default" || selectedAction === "extended") && (
            <>
              <button className="TealButton">COL$ 200.000</button>
              <button className="WhiteButton">COL$ 100.000</button>
              <button className="TealButton">COL$ 50.000</button>
            </>
          )}
          {selectedAction === "extended" && (
            <>
              <button className="WhiteButton">COL$ 20.000</button>
              <button className="TealButton">COL$ 10.000</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectPrice;
