import { InputHTMLAttributes, forwardRef } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, nameInputRef) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type="text"
        ref={nameInputRef}
        {...rest}
      />
    </div>
  )
}

export default forwardRef(Input)