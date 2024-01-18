import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPriceAction, setSelectedAmount } from "../../store/price/priceSlice";
import "./SelectPrice.scss";

const SelectPrice = () => {
  const dispatch = useDispatch();
  const { selectedAction, selectedAmount } = useSelector((state) => state.price);

  const handleActionClick = (action) => {
    dispatch(setPriceAction(action));
    dispatch(setSelectedAmount(null)); // Resetear el monto seleccionado al cambiar la acción
  };

  const handleAmountClick = (amount) => {
    dispatch(setSelectedAmount(amount));
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
              <button
                onClick={() => handleAmountClick("200000.00")} 
                className={
                  selectedAmount === "200000.00" ? "active" : "TealButton"
                }
              >
                COL$ 200,000.00
              </button>
              <button
                onClick={() => handleAmountClick("100000.00")}
                className={
                  selectedAmount === "100000.00" ? "active" : "WhiteButton"
                }
              >
                COL$ 100,000.00
              </button>
              <button
                onClick={() => handleAmountClick("50000.00")}
                className={
                  selectedAmount === "50000.00" ? "active" : "TealButton"
                }
              >
                COL$ 50,000.00
              </button>
            </>
          )}
          {selectedAction === "extended" && (
            <>
              <button
                onClick={() => handleAmountClick("20000.00")}
                className={
                  selectedAmount === "20000.00" ? "active" : "WhiteButton"
                }
              >
                COL$ 20,000.00
              </button>
              <button
                onClick={() => handleAmountClick("10000.00")}
                className={
                  selectedAmount === "10000.00" ? "active" : "TealButton"
                }
              >
                COL$ 10,000.00
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectPrice;
