import { useState, useEffect } from "react";
import axios from "axios";

const useAPI = (apiUrl) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then(function (response) {
        // handle success
        setData(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return data;
};

export default useAPI;
