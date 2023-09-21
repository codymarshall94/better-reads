import axios from "axios";
import { useEffect, useState } from "react";

export default function getArticles(topic: any, page: number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<string[] | any>([]);
  const [error, setError] = useState<any>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `https://newsdata.io/api/1/news?category=${topic}&language=en&apikey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        );
        setData(response);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        
      }
    };
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
}
