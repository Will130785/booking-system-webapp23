// Handle Forms
export type handleSubmitCallbackType = {
  (fields: { 
    username?: string, 
    password?: string, 
    confirmPassword?: string,
    clientName?: string,
    description?: string,
    worker?: string
  }, id: string): Promise<{ success: boolean; data: {}; } | undefined>    
}

export interface IUseFormFields {
  fields: { [key: string]: string }, 
  setFormValues(): void, 
  handleSubmit(): Promise<void>, 
  response: { data: { [key: string]: string } }, 
  setFormErrors({}): void, 
  errors: { [key: string]: string }, 
  setBookingId(id: string | undefined): void, 
  bookingId: string, 
  setInitialFormValues({}): void
}

export type validationType = {
  (): {}
}

// Delete Data
export type deleteHandlerType = {
  (id: string): Promise<{ status: number }>
}

// Fetch Data
export type fetchDataType = {
  (): Promise<{ data: [] }>
}
export type fetchDataItemType = {
  (id: string): Promise<{ data: {} }>
}
export interface IUseFetchData {
  data: [], 
  setData(): void, 
  error: {}, 
  setError(): void, 
  getData(): Promise<void>, 
  setId(id: string): void, 
  id: string, 
  dataItem: {[key: string]: string}, 
  setDataItem(): void, 
  getDataItem(): Promise<void>
}

export interface ISubmitResponse {
  success: boolean,
  data: {
    message: string
  },
  navigateTo: string
}