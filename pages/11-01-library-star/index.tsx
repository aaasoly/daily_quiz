import { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value: number) => {
    setValue(value);
    alert(`${value}점`)
  };
  return (
    <div>
      <Rate onChange={handleChange} value={value} /><br/>
      {value}점
    </div>
  )
}