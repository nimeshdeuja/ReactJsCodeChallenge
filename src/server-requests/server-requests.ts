import axios from "axios";

type Props = {
    url:string,
    params?:object
}

export const get = ({url, params}:Props) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error.response ? error.response.status : 503));
  });
};

