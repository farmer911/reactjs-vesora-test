export interface Action<Payload = any> {
  type: string;
  payload: Payload;
}

export interface ActionStoryReducer<Payload = any> {
  type: string;
  payload: Payload;
  wordCound: number;
  error: string;
}
export interface AsyncAction<Request = any, Payload = any> {
  type: string;
  meta: Request;
  payload: Payload;
  error: string;
}

export interface ActionCallback<Payload = any> {
  type: string;
  payload: Payload;
  callback?: any
}
