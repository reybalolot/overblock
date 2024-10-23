import { motion } from "framer-motion";
import { TbMenuDeep } from "react-icons/tb";
import { MdOutlineDeleteOutline, MdOutlineEdit  } from "react-icons/md";
import { useEffect, useState, useRef } from "react";


export const Card = ({id, title, body, setCards}) => {
    const [ hovered, setHovered ] = useState(false);
    const display = !hovered ? 'opacity-0' : 'ocapity-100';


    const handleDelete = (e) => {
        setCards((pv) => pv.filter((c) => c.id !== id ));
    }

    const handleMouseEnter = (e) => {
        setHovered(true);
    }

    //framer variants
    const cardVariants = {
        hidden: {opacity: 0},
        show: {opacity: 1}
    }


    return (
        <>
            <motion.div
              layout
              className={`p-2 text-sm text-white rounded border border-neutral-700 bg-transparent break-inside-avoid my-2`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => setHovered(false)}
              variants={cardVariants}
              whileHover={{
                rotate: "-1.07deg",
                scale: 1.01,
              }}
              >
                <p className="my-2">{title}</p>
                <p className="my-2 text-gray-500">{body}</p>
                <motion.div  className="justify-end flex h-5">
                    <button className={`${display} transition delay-200 ease-in p-1 mx-0.5 rounded text-red-900 hover:bg-red-900 hover:text-white`} onClick={handleDelete} ><MdOutlineDeleteOutline/></button>
                    <button className={`${display} transition delay-200 ease-in p-1 mx-0.5 rounded text-tertiary hover:bg-tertiary hover:text-white`}><MdOutlineEdit/></button>
                    {/* <TbMenuDeep/> */}
                </motion.div>
            </motion.div>
        </>
    )
}



const EditNote = ({ setCards }) => {
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
        <motion.form layout onSubmit={handleSubmit} className="">
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
        </motion.button>
       )}
    </>
  );
}
