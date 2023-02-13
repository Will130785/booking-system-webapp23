export type handleSubmitCallbackType = {
  (fields: { 
    username?: string, 
    password?: string, 
    confirmPassword?: string
  }): Promise<{ success: boolean; data: any; } | undefined>    
}

export type validationType = {
  (): {}
}