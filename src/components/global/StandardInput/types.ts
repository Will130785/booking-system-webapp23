export interface IStandardInputProps {
  labelPosition: string,
  labelText: string,
  inputType: string,
  inputId: string,
  onChange(): void,
  value: string
}