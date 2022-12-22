import { API } from "../../../utils/connectionClient";

const getAlmacenMovs = (almacenId) => {
  return new Promise((resolve, reject) => {
    API.get(`/almacenes/movimientos/${almacenId}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export default getAlmacenMovs;