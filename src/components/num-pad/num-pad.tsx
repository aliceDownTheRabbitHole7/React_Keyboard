import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function NumberPad({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setIndex] = useState(-1);

  return (
    <>
      <div className="num-container">
        {items.map((char, index) => (
          <div className="btn btn-primary num-key">
            <button
              type="button"
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={char}
              onClick={() => {
                setIndex(index);
                onSelectItem(char);
              }}
            >
              {char}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default NumberPad;
