import Dropdown from '../components/Dropdown';
import {useState} from "react";

function DropdownPage() {
  const [selection, setSelection] = useState(null)

  const handleSelect = (option) => {
    setSelection(option)
  }

  const options = [
    { label:'Red', value: 'red'},
    { label:'Green', value: 'green'},
    { label:'Blue', value: 'blue'},
  ]

return(
  <div className="flex">
    <a href='dashboard'>Dashboard</a>
    <Dropdown options={options} value={selection} onChange={handleSelect} />
  </div>

)}

export default DropdownPage;
