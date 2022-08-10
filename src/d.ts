export declare type JsonValue = string | number | object | Array<JsonValue>;
export declare type queryOrElement = HTMLElement | string;
export declare type ItemJson = {
  parentId: string,
  id: string,
  open: boolean,
  sort: number,
  html: string,
  data: object
};