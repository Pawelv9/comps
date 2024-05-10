import { useState } from 'react'


const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const renderOptions = options.map(option => {
    return <div key={option.value}>
      {option.label}
    </div>
  })

  return (
    <div>
      <div onClick = {handleClick}>Select..</div>
      {isOpen && <div>{renderOptions}</div>}
    </div>
  )
}

export default Dropdown