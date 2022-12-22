import { API } from "../../../utils/connectionClient";

const setTraspaso = async (traspaso) => {
  return new Promise((resolve, reject) => {
    API.post("/movimientos", traspaso)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default setTraspaso;