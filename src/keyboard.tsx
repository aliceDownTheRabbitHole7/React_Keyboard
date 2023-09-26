import { useState } from 'react';

interface Props {
  items: string[];
  heading: string;
}

function Keyboard({ items, heading }: Props) {
  
  const [selectedIndex, setIndex] = useState(-1)
 
  return (
    <>
      <div className="keyboard_container">
        {items.map((char, index) => (
          <div className="btn btn-primary btn-key">
            <button 
            type="button" 
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"} 
            key={char} 
            onClick={() => {setIndex(index)}}
            >
              {char}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Keyboard;
