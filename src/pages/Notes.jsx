import { useEffect, useState, useRef } from "react";
// import NoteCard from "../components/NoteCard";
import { Card } from "../components/notes/Card.jsx";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";

const Notes = () => {
    const [cards, setCards] = useState(DEFAULT_NOTES);



    //framer variants
    const gridContainerVariants = {
      hidden: {
        opacity:0
      },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.07
        }
      }
    }


    return (
        <>
        <div className="w-dvw h-full overflow-y-scroll">
          <div className="m-2 p-2 font-bold flex">
            <div className="text-white">Notes</div>
            <div className="text-white mx-2">|</div>
          </div>
          <hr className="mx-3"/>
          <motion.div variants={gridContainerVariants} initial='hidden' animate='show' className="p-3 columns-[300px] gap-2 h-auto">
            <AddNote setCards={setCards}/>
              { cards.map((c) => {
                return <Card key={c.id} {...c} setCards={setCards}/>
              })
              }
          </motion.div>
        </div>
        </>
    )
}

const AddNote = ({ setCards }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [adding, setAdding] = useState(false);
  const textAreaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!body.trim().length) return;

    const newCard = {
      title: title.trim(),
      body: body.trim(),
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
    setBody('');
  };

  useEffect(() => {
    const textarea = textAreaRef.current;
    const autoResize = () => {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
    if (adding) {
      textarea.addEventListener('input', autoResize);
    }
  },[adding])

  return (
    <>
      {adding ? (
        <div>
        <motion.form layout onSubmit={handleSubmit} className="break-inside-avoid">
          <div className="text-sm border border-neutral-100 rounded p-2">
             <input
                onChange={(e) => setTitle(e.target.value || ' ')}
                placeholder="Add title"
                className="w-full bg-transparent mt-2 text-neutral-50 placeholder-gray-600 focus:outline-0"
                />
            <textarea
                ref={textAreaRef}
                onChange={(e) => setBody(e.target.value)}
                autoFocus
                placeholder="Add new note..."
                className="w-full bg-transparent mt-2 text-neutral-50 placeholder-gray-600 focus:outline-0 resize-none"
                />
            </div>
            <div className="mt-1.5 flex items-center justify-end gap-1.5 mb-4">
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded bg-green-900 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:text-neutral-300 hover:bg-green-700"
                >
                <span>Save</span>
              </button>
              <button
                onClick={() => setAdding(false)}
                className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
                >
                Close
              </button>
            </div>
        </motion.form>
        </div>
       ) : (
       <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-2.5 px-3 p-3 mb-2 text-xs text-green-400 transition-colors border border-green-600 rounded hover:border-green-700 hover:bg-green-900 hover:text-white"
        >
          <span>Add note</span>
          <FaPlus />
        </motion.button>
       )}
    </>
  );
}

const DEFAULT_NOTES = [
    {id: '1', title: 'Note title', body: 'This is the content on a note'},
    {id: '2', title: 'Note title', body: 'This is the content'},
    {id: '3', title: 'Note title', body: 'This is the content'},
    {id: '4', title: 'Note title', body: 'This is the content'},
    {id: '5', title: 'Note title', body: 'This is the content'},
    {id: '6', title: 'Note title', body: 'This is the content'},
    {id: '7', title: 'Note title', body: 'This is the content'},
    {id: '8', title: 'Note title', body: 'This is the content'},
    {id: '9', title: 'Note title', body: 'This is the content'},
    {id: '10', title: 'Note title', body: 'This is the content'},
    {id: '11', title: 'Note title', body: 'This is the content'},
    {id: '12', title: 'Note title', body: 'This is the content'},
    {id: '13', title: 'Note title', body: 'This is the content'},
    {id: '14', title: 'Note title', body: 'This is the content'},
    {id: '15', title: 'Note title', body: 'This is the content'},
    {id: '16', title: 'Note title', body: 'This is the content'},
]

export default Notes;
