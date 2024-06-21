import { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (e: any) => {
    console.log(e.target);
  };

  return (
    <div>
      <div>
        <button id="1" onClick={(e: any) => handleOpen(e)}>
          1
        </button>
        <button id="2" onClick={(e: any) => handleOpen(e)}>
          2
        </button>
        <button id="3" onClick={(e: any) => handleOpen(e)}>
          3
        </button>
      </div>
      <div>content 1</div>
      <div>content 2</div>
      <div>content 3</div>
    </div>
  );
};

export default Accordion;
