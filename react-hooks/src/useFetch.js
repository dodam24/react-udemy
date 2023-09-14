import { useEffect, useState } from 'react';

export function useFetch(baseUrl, initialType) {
  const [data, setData] = useState(null); 

  const fetchUrl = (type) => {
    fetch(baseUrl + '/' + type)
    .then((res) => res.json())  // 가져온 데이터를 json 형태로 변환
    .then((res) => setData(res));  // 반환된 값을 setData 함수를 통해 data에 넣어줌
  };

  useEffect(() => {
    fetchUrl(initialType)
  }, []);

  return {
    data,
    fetchUrl,
  };
}