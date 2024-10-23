import { motion, useAnimate, useDragControls, usePresence } from "framer-motion";
import { TbMenuDeep } from "react-icons/tb";
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useEffect, useState, useRef } from "react";


export const Card = ({id, title, body, setCards, }) => {
    const [ hovered, setHovered ] = useState(false);
    const [ isPresent, safeToDelete ]  = usePresence();
    const [ scope, animate ] = useAnimate();
    const display = !hovered ? 'opacity-0' : 'opacity-100';


    const handleDelete = () => {
        setCards((pv) => pv.filter((c) => c.id !== id ));
    }

    const handleMouseEnter = () => {
        setHovered(true);
    }

    //framer variants
    const onloadVariants = {
        hidden: {opacity: 0},
        show: {opacity: 1}
    }

    useEffect(() => {
      if (!isPresent) {
        const deleteAnimation = async () => {
          await animate(scope.current,
            { backgroundColor: '#dc2626', color: '#fefefe', scale: 0.9 },
            { ease: 'easeIn', duration: 0.2 }
          )
          await animate(scope.current,
            { opacity: 0, y: 5 },
            { ease: 'easeIn', delay: 0.2 }
          )
          safeToDelete()
        }
        deleteAnimation()
      }
    }, [isPresent])

    return (
        <>
            <motion.div
              layout
              drag
              dragSnapToOrigin={true}
              // dragConstraints={cardConstraints}
              dragElastic={0}
              dragMomentum={false}
              variants={onloadVariants}
              ref={scope}
              whileDrag={{scale: 1.1, rotate: "-1.7deg", cursor: 'grabbing', zIndex: 999}}
              whileHover={{scale: 1.01,}}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => setHovered(false)}
              className={`p-1 text-sm text-white rounded border border-neutral-700 bg-neutral-900 break-inside-avoid my-2`}
              >
                <p className="m-2">{title}</p>
                <p className="m-2 text-gray-500">{body}</p>
                <motion.div  className="justify-end flex h-5 mx-2 mb-2">
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
