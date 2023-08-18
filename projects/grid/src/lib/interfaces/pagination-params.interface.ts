export type IPaginationFunction = (params: IPaginationParams) => void;

export interface IPaginationParams {
  limit: number;
  offset: number;
}
