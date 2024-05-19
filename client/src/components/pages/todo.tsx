import React, { useState } from 'react';
import './style.css';

interface CheckboxItem {
  id: number;
  label: string;
  checked: boolean;
}
const initialStatements: CheckboxItem[] = [
    { id: 1, label: 'Make a short link or QR code.', checked: false },
    { id: 2, label: 'Click it,scan it or share it.', checked: false },
    { id: 3, label: 'Checkout Bitly Analyics.', checked: false },
  ];
const Todo: React.FC = () => {
  const [items, setItems] = useState<CheckboxItem[]>(initialStatements);

  const handleClick = (id: number) => {
    setItems(items.map((item) => (
      item.id === id ? { ...item, checked: !item.checked } : item
    )));
  };


  return (
<>
<div style={{border:"2px solid rgb(157, 157, 160)",padding:"15px",borderRadius:"5px"}}>
        {items.map((statement) => (
          <div key={statement.id} style={{ textDecoration: statement.checked ? 'line-through' : 'none' }}>
            <button onClick={() => handleClick(statement.id)} style={{marginRight:"10px",padding:"5px"}}>
              <input type='checkbox' style={{width:"20px",height:"20px"}}></input>
            </button>
            <span>{statement.label}</span>
            {/* <br></br> */}
            <div className="button-container">
        <button className='btnb'><a href='/links'>Create links</a></button>
        <button className='btnb'><a href='/qr'>View QR code</a></button>
      </div>
          </div>
        ))}
      </div>
      </>
  );
};

export default Todo;
