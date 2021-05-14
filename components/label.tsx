import * as React from 'react'
import 'twin.macro'

const Label: React.FC<{ text: string } & React.HTMLProps<HTMLLabelElement>> = ({ text, ...props }) => (
  <label tw="text-white text-sm" {...props}>
    {text}
  </label>
)

export default Label
