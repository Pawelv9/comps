import { useState } from 'react'

const Dropdown = ({ options, selection, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    onSelect(option);
  }

  const renderOptions = options.map(option => {
    return(
      <div
          onClick={() => handleOptionClick(option)}
          key={option.value}>
        {option.label}
      </div>
    )
  })



  return (
    <div>
      <div onClick = {handleClick}>{selection?.label || 'Select..'}</div>
      {isOpen && <div>{renderOptions}</div>}
    </div>
  )
}

export default Dropdown