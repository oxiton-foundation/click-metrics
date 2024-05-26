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
<div className="border-2 border-[#9d9da0] p-4 rounded-md">
        {items.map((statement) => (
          <div key={statement.id} style={{ textDecoration: statement.checked ? 'line-through' : 'none' }}>
            <button onClick={() => handleClick(statement.id)} className='mr-2 p-1.5'>
              <input type='checkbox' className='w-5 h-5'></input>
            </button>
            <span>{statement.label}</span>
            <div className="mr-4">
        <button className="mr-4 bg-[#fefeff] text-[#3808e9] border-2px-blue px-2 py-1 rounded-md cursor-pointer border-2 border-blue-500 hover:bg-blue-500 hover:text-white"><a href='/links'>Create links</a></button>
        <button className="mr-4 bg-[#fefeff] text-[#3808e9] border-2px-blue px-2 py-1 rounded-md cursor-pointer border-2 border-blue-500 hover:bg-blue-500 hover:text-white"><a href='/qr'>View QR code</a></button>
      </div>
          </div>
        ))}
      </div>
      </>
  );
};

export default Todo;
