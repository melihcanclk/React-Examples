import { useState } from 'react'
import axios, { AxiosError, AxiosResponse } from "axios";

function App() {
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchDog = () => {
    setLoading(true);
    setError("");
    setData("");

    axios("https://dog.ceo/api/breeds/image/random").then((res: AxiosResponse) => {
      setData(res.data.message)
    }).catch((err: AxiosError) => {
      setError("Error fetching data : " + err);
    }).finally(() => {
      setLoading(false);
    })

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
