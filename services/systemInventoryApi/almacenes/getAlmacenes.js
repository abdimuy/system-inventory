import { API } from "../../../utils/connectionClient";

const getAlmacenes = () => new Promise((resolve, reject) => {
  API.get("/almacenes")
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error);
    });
})

export default getAlmacenes;