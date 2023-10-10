export interface IConverter {
  label: string,
  value: string
}

interface IApiResponseObject {
  amount: string,
  base: string,
  currency: string
}

export interface IApiResponse {
  data: IApiResponseObject
}