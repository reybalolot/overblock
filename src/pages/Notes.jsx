import { useEffect, useState, useRef } from "react";
import { Card } from "../components/notes/Card.jsx";
import { AnimatePresence, delay, motion } from "framer-motion";
import { FaPlus, FaPen } from "react-icons/fa6";

const Notes = () => {
    const [cards, setCards] = useState(DEFAULT_NOTES);
    const cardConstraint = useRef()

    //framer variants
    const gridContainerVariants = {
      hidden: {
        opacity:0
      },
      show: {
        opacity: 1,
        transition: {
          duration: .1,
          staggerChildren: 0.08,
          ease: 'linear',
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
          <motion.div
            layout
            variants={gridContainerVariants}
            initial='hidden'
            animate='show'
            ref={cardConstraint}
            className="p-3 columns-[300px] gap-2 h-auto">
            <AddNote setCards={setCards}/>
            <AnimatePresence>
              { cards.map((c) => {
                return <Card key={c.id} {...c} setCards={setCards} cardConstraints={cardConstraint}/>
              })
              }
            </AnimatePresence>
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

  //framer variants
  const wrapperVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        type: 'tween',
        ease: 'easeIn'
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
        delay: 0.09,
      }
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      width: 0,
      transition: {
        type: 'keyframe',
        ease: 'easeIn',
        duration: 0.9
      }
    },
    show: {
      opacity: 1,
      width: '100%',
      transition: {
        type: 'keyframe',
        ease: 'easeIn',
        delay: 0.09
      }
    }
  }

  //handlers
  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!body.trim().length) return;

    const newCard = {
      title: title.trim(),
      body: body,
      id: Math.random().toString(),
    };

    setCards((pv) => [newCard, ...pv]);

    setAdding(false);
    setTitle('');
    setBody('');
  };

  //useEffects
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
      <div className="break-inside-avoid">
      <AnimatePresence>
      <div className="flex gap-1">
        {adding ? (
        <motion.button
          whileHover={{scale: 0.99}}
          onClick={handleSubmit}
          className="flex w-full items-center gap-2.5 px-3 p-3 mb-2 text-xs rounded transition-all ease-in-out duration-300 border border-green-600 text-green-400 hover:border-green-700 hover:bg-green-600 hover:text-white"
          >
          <motion.span
          initial={buttonVariants.hidden}
          animate={buttonVariants.show}
          exit={buttonVariants.hidden}
          className="flex flex-row gap-2">
            Save
            <FaPen/>
            </motion.span>
        </motion.button>
          ) : (null)
        }
        <motion.button
          whileHover={{scale: 0.99}}
          onClick={() => setAdding(is => !is)}
          className={`flex w-full items-center gap-2.5 px-3 p-3 mb-2 text-xs rounded transition-all ease-in-out duration-300 border ${adding? 'border-red-600 text-red-400 hover:border-red-700 hover:bg-red-600 hover:text-white' : 'border-yellow-600 text-yellow-400 hover:border-yellow-700 hover:bg-yellow-600 hover:text-white' }`}
          >
          <span className="transition ease-out duration-300">{adding ? 'Close' : 'Add note'}</span>
          <FaPlus className={`transition-transform ${adding ? "rotate-45" : "rotate-0"}`}/>
        </motion.button>
      </div>
      </AnimatePresence>
      <AnimatePresence>
        {adding ? (
          <motion.form
            layout
            initial={wrapperVariants.closed}
            animate={wrapperVariants.open}
            exit={wrapperVariants.closed}
            variants={wrapperVariants}
            onSubmit={handleSubmit}
            className="text-sm border border-yellow-500 bg-yellow-600/10 rounded p-2"
            >
          <div>
             <input
                onChange={(e) => setTitle(e.target.value || ' ')}
                placeholder="Title"
                className="w-full bg-transparent m-2 text-neutral-50 placeholder-yellow-100/30 focus:outline-0"
                />
            <textarea
                ref={textAreaRef}
                onChange={(e) => setBody(e.target.value)}
                autoFocus
                placeholder="New note..."
                className="w-full bg-transparent m-2 text-neutral-50 placeholder-yellow-100/30 focus:outline-0 resize-none"
                />
          </div>
          </motion.form>
          ) : (
            null
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

const DEFAULT_NOTES = [
    {id: '1', title: 'Note #1', body: 'This is the content on a note'},
    {id: '2', title: 'Note #2', body: 'This is the content'},
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
    {id: '16', title: 'Note #16', body: 'This is the content'},
]

export default Notes;
