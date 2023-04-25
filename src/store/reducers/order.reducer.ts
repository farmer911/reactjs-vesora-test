import pathOr from 'ramda/es/pathOr';

import {
  getOrderTabs,
} from '../actions';
import { IOrderState, Order } from '../../types/IOrder';

const sortASC = (isSort: boolean, data: Order) => {
  const sortOrder = isSort ? 'asc' : 'desc'
  const sorted = [...data.orders_AAA.sent].sort((a, b) => {
    return (
      a.subject.title.toString().localeCompare(b.subject.title.toString(), "en", {
        numeric: true,
      }) * (sortOrder === "asc" ? 1 : -1)
    );
  })
  data.orders_AAA.sent = sorted
  return data
}

const DEFAULT_STATE: IOrderState = {
  data: {
    orders_A: [],
    orders_AA: [],
    orders_AAA: {
      sent: []
    },
    orders_B: [],
    orders_C: []
  },
  error: '',
  pending: false,
  request: null,
  sort: false,
};

const DEFAULT_ACTION: any = {
  type: '',
  payload: {
    orders_A: [],
    orders_AA: [],
    orders_AAA: {
      sent: []
    },
    orders_B: [],
    orders_C: []
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = DEFAULT_STATE, action = DEFAULT_ACTION): any => {
  return pathOr(state, [action.type], {
    [getOrderTabs.REQUEST]: {
      ...state,
      data: DEFAULT_STATE.data,
      pending: true,
      sort: false
    },
    [getOrderTabs.SUCCESS]: {
      ...state,
      pending: false,
      data: action.payload
    },
    [getOrderTabs.UPDATE]: {
      ...state,
      data: sortASC(state.sort, state.data),
      sort: !state.sort
    }
  });
};
