import { API } from "../../../utils/connectionClient";

const getVendedores = () => {
  return new Promise((resolve, reject) => {
    API.get(`/vendedores`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      })
  })
};

export default getVendedores;