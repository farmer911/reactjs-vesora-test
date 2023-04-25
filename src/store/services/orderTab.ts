import axios, { AxiosPromise } from "axios";
import { GenericResponse } from "../../types/GenericResponse";
import { BASE_URL } from "../consts";

export const orderTab = ():  AxiosPromise<GenericResponse> => {
    return axios({
      method: 'get',
      url: `${BASE_URL}/data/orders.json`,
    });
  };