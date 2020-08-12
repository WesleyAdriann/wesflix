export interface InputStyledProps {
  value: string,
}

export interface FormFieldProps {
  label: string,
  type: string,
  name: string,
  value: string,
  onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void,
}
