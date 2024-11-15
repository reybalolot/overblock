import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";

export const Card = ({ title, id, column, handleDragStart }) => {

  const cardVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        variants={cardVariants}
        whileHover={{
          rotate: "-1.5deg",
          scale: 1.01,
        }}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab md:w-auto rounded border border-neutral-700 bg-neutral-800 p-2 active:cursor-grabbing"
        >
        <p className="text-sm text-neutral-100 leading-7 whitespace-normal">{title}</p>
      </motion.div>
    </>
  );
};

export const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};


export const AddCard = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            maxLength={100}
            placeholder="Add new task..."
            className="w-full h-auto rounded border border-neutral-700 bg-transparent p-3 text-sm text-neutral-50 placeholder-gray-600 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
              <FaPlus />
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-green-500"
        >
          <span>Add card</span>
          <FaPlus />
        </motion.button>
      )}
    </>
  );
};
