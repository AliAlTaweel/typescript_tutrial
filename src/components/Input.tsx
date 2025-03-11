
type InputProps = {
    value: string,
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}
function Input({value, handleChange}:InputProps) {
  return (
    <input value={value} onChange={handleChange}/>
  )
}

export default Input