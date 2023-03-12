import { useReducer } from 'react'
import axios, { AxiosError, AxiosResponse } from "axios";
import reducer from './reducer';

const initialState = {
  data: "",
  loading: false,
  error: ""
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, loading, error } = state;
  
  const fetchDog = () => {
    dispatch({ type: "FETCH_START" });

    axios("https://dog.ceo/api/breeds/image/random").then((res: AxiosResponse) => {
      dispatch({ type: "FETCH_SUCCESS", payload: res.data.message });
    }).catch((err: AxiosError) => {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    });

  }

  return (
    <div className="App">
      <button onClick={fetchDog} disabled={loading}>
        Fetch Dog
      </button>
      {
        data &&
        (
          <div>
            <img src={data} />
          </div>
        )
      }
      {error && (<>{error}</>)}
    </div>
  )
}

export default App
