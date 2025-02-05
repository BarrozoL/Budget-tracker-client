import "../css/Homepage.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

//images
import happyCoin1 from "../images/Happy-coin-3.png";

export default function Homepage() {
  useEffect(() => {
    getMonths();
  }, []);

  const [months, setMonths] = useState([]);

  const getMonths = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/months`
      );
      setMonths(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="homepage">
        <h1>Budget Tracker</h1>

        <div className="homepage-months">
          {months &&
            months?.map((month) => {
              console.log(month.name);
              return (
                <Link key={month._id} to={`/months/${month.name}`}>
                  <h3 className="individual-months">{month.name}</h3>
                </Link>
              );
            })}
          <img src={happyCoin1} alt="happy-coin" className="happy-coin3" />
        </div>
      </div>
    </>
  );
}
