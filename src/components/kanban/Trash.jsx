import { useState } from "react";
import { MdOutlineDelete, MdOutlineDeleteForever } from "react-icons/md";

const Trash = ({ setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setCards((pv) => pv.filter((c) => c.id !== cardId));

    setActive(false);
  };

  return (
    <div
      onDrop={handleDragEnd}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`flex h-auto w-auto shrink-0 place-content-center items-center rounded text-3xl ${
        active
          ? "bg-red-800/20 text-red-500"
          : "bg-neutral-500/5 text-neutral-500"
      }`}
    >
      {active ? <MdOutlineDeleteForever className="animate-bounce" /> : <MdOutlineDelete />}
    </div>
  );
};

export default Trash;
