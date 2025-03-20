import React, { useEffect, useReducer } from "react";
import { IniatilState } from "./IniatilState";
import { FETCH_INIT, FETCH_START, FETCH_ERROR } from "./ActionsTypes";
import { UserDetails } from "../data";

const DispatchFunction = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return { ...state, loading: true, error: null };
    case FETCH_START:
      return { ...state, loading: false, data: action.payload };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const Reducerhook = () => {
  const [state, dispatch] = useReducer(DispatchFunction, IniatilState);

  const dataHandler = async () => {
    try {
      dispatch({ type: FETCH_INIT });

      // Simulating async fetch if UserDetails is a static local JSON object
      const newData = await new Promise((resolve) => {
        setTimeout(() => resolve(UserDetails), 1000);
      });

      dispatch({ type: FETCH_START, payload: newData });
    } catch (error) {
      dispatch({ type: FETCH_ERROR, payload: "Failed to fetch data" });
    }
  };

  useEffect(() => {
    dataHandler();
  }, []);

  return (
    <div>
      {state.loading && <p>Loading...</p>}
      {state.data && (
        <div>
          {state.data.map((item) => {
            return (
              <div>
                <h2 style={{ color: "green", backgroundColor: "blue" }}>
                  {item.id}
                </h2>
                <h2 style={{ color: "red", backgroundColor: "gray" }}>
                  {item.name}
                </h2>
                <h2 style={{ color: "orange", backgroundColor: "navyblue" }}>
                  {item.email}
                </h2>
              </div>
            );
          })}
        </div>
      )}
      {state.error && <div>{alert(state.error)}</div>}
    </div>
  );
};

export default Reducerhook;
