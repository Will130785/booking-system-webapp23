export type handleSubmitCallbackType = {
  (fields: { 
    username?: string, 
    password?: string, 
    confirmPassword?: string,
    clientName?: string,
    description?: string,
    worker?: string
  }): Promise<{ success: boolean; data: any; } | undefined>    
}

export type validationType = {
  (): {}
}