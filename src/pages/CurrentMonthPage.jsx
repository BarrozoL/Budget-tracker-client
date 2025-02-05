import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/CurrentMonthPage.css";

import happyCoin1 from "../images/Happy-coin-1.png";
import happyCoin2 from "../images/Happy-coin-2.png";

export default function CurrentMonthPage() {
  const { monthName } = useParams();

  useEffect(() => {
    getMonthByName();
  }, []);

  const [currentMonth, setCurrentMonth] = useState([]);

  const getMonthByName = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/months/${monthName}`
      );
      setCurrentMonth(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="month-name">
          <h1>{currentMonth?.name}</h1>
        </div>

        <div className="month-summary">
          <h3>
            Valor disponível para o resto do mês:{" "}
            {currentMonth?.remainingBudget}
          </h3>
          <h3>Valor gasto até hoje: {currentMonth.ammountSpent}</h3>
          <h3>Budget total do mês: {currentMonth?.monthlyBudget}</h3>
        </div>
        <div>
          <h3>Gastos:</h3>
          <p>Mercado: $20 Dia: 2</p>
          <p>Mercado: $40 Dia: 1</p>
          <p>Mercado: $30 Dia: 5</p>
        </div>
        <div className="coin-container">
          <img src={happyCoin1} alt="happy-coin1" className="happy-coin1" />
          <img src={happyCoin2} alt="happy-coin2" className="happy-coin2" />
        </div>
      </div>
    </>
  );
}
