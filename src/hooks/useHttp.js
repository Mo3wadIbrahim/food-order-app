import { useState, useEffect, useCallback } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();
  if (!response.ok) {
    throw new Error(resData.message || "Error while Loading!");
  }
  return resData;
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const resData = await sendHttpRequest(url, { ...config, body: data });
        setData(resData);
      } catch (error) {
        setError(error.message || "Error while Loading!");
      }
      setIsLoading(false);
    },
    [url, config],
  );
  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      sendRequest();
    }
  }, [sendRequest, config]);
  function clearData() {
    setData(initialData);
  }
  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}
