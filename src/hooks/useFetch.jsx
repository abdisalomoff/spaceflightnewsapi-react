// useFetch.js
import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        const options = {
            method: 'GET',
            url: 'https://twitter154.p.rapidapi.com/lists/tweets',
            params: {
              list_id: '1591033111726391297',
              limit: '100'
            },
          

        headers: {
             'X-RapidAPI-Key': '9a6b50baacmsh4ce09a3d3962a9ap10ec81jsn3522c29b4f1d',
            // 'X-RapidAPI-Key': '75a60e6f70mshe304bf3dd47718ep1e22c7jsn6e351247ec9f',
            // 'X-RapidAPI-Key': '183e0f9e9dmsh6a3205b52f588c1p19b7dfjsnbe984a32f185',
        //   'X-RapidAPI-Key': '35bad89a17msh6849503e3b74392p15d919jsn8db83a46e557',
        // 'X-RapidAPI-Key': '8e76f9c374msh24ae6856e431efap1014ddjsn525967a8037a',
        //   'X-RapidAPI-Key': 'e01238c690msh74f20bdc84d5dcfp122562jsnc9921fa7c4c1',
        //   'X-RapidAPI-Key': '13943e42c8mshec19c172342d447p1e5a69jsn262c5e0f6f14',
        //   'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
        //   'X-RapidAPI-Key': 'afb6b15575msh94921e12823212bp1287aejsn3b067e816729',
        // 'X-RapidAPI-Key': 'f9d65af755msh3c8cac23b52a5eep108a33jsnbf7de971bb72',


        'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
        }
      };

      try {
        setLoading(true);
        const response = await axios.request(options);
        setTweets(response.data.results);
        setLoading(false);
        console.log(response.data.results);
      } catch (error) {
        setLoading(false)
        setError(error)
        console.error(error.response.data);
      }
    };

    fetchData();
  }, []);
  

  return { tweets ,error, loading };
};

export default useFetch;
