import { API } from "../../../utils/connectionClient";

const getAlmacen = (almacenId, comparationText) => {
  return new Promise((resolve, reject) => {
    API.get(`/almacenes/${almacenId}?comparation=${comparationText}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  })
}

export default getAlmacen;