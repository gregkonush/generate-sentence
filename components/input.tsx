import * as React from 'react'
import { UseFormRegister } from 'react-hook-form'
import 'twin.macro'
import Label from './label'

const Input: React.FC<{
  register: UseFormRegister<any>
  name: string
  label?: string
  labelProps?: Record<string, any>
}> = ({ register, name, label, labelProps }) => (
  <div tw="flex-col flex space-y-1">
    {label && <Label {...labelProps} text={label} htmlFor={name} />}
    <input tw="bg-gray-800 text-gray-50 p-2" {...register(name)} />
  </div>
)

export default Input
