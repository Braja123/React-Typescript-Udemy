import React, { ComponentPropsWithoutRef } from 'react'

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<"input">

const Input = ({label, id, ...props}: InputProps) => {
  return (
    <p>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} {...props} />        {/* ctrl + space -> for all props */}
    </p>
  )
}

export default Input;