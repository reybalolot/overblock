import { motion, useAnimate, useDragControls, usePresence } from "framer-motion";
import { TbMenuDeep } from "react-icons/tb";
import { MdOutlineDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useEffect, useState, useRef } from "react";


export const Card = ({id, title, body, setCards, }) => {
    const [ hovered, setHovered ] = useState(false);
    const [ isPresent, safeToDelete ]  = usePresence();
    const [ scope, animate ] = useAnimate();
    const [ editting, setEditting ] = useState(false);
    const display = !hovered ? 'opacity-0' : 'opacity-100';

    const handleDelete = () => {
        setCards((pv) => pv.filter((c) => c.id !== id ));
    }

    const handleMouseEnter = () => {
        setHovered(true);
    }

    //framer variants
    const onloadVariants = {
        hidden: {opacity: 0, transition: {type: 'keyframe'}},
        show: {opacity: 1, transition: {type: 'keyframe'}}
    }

    useEffect(() => {
      if (!isPresent) {
        const deleteAnimation = async () => {
          await animate(scope.current,
            { backgroundColor: '#dc2626', scale: 0.95 },
            { ease: 'easeIn', duration: 0.2 }
          )
          await animate(scope.current,
            { opacity: 0, y: 5 },
            { ease: 'easeIn', delay: 0.1 }
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
              { editting ? (
                <EditNote id={id} title={title} body={body} setEditting={setEditting} setCards={setCards}/>
                ) : (
                  <motion.div
                    layout
                    initial={{transition: {type:'keyframes', ease: 'easeIn'}}}
                    animate={{transition: {type:'keyframes', ease: 'easeIn'}}}
                    exit={{transition: {type:'keyframes', ease: 'easeIn'}}}
                    className="m-2">
                      <p>{title}</p>
                      <p className="text-gray-500">{body}</p>
                    <motion.div   className="justify-end flex h-5 mt-1">
                      <button className={`${display} transition delay-200 ease-in p-1 mx-0.5 rounded text-red-900 hover:bg-red-900 hover:text-white`} onClick={handleDelete} ><MdOutlineDeleteOutline/></button>
                      <button className={`${display} transition delay-200 ease-in p-1 mx-0.5 rounded text-tertiary hover:bg-tertiary hover:text-white`} onClick={() => setEditting(true)} ><MdOutlineEdit/></button>
                      {/* <TbMenuDeep/> */}
                    </motion.div>
                  </motion.div>
                )}
            </motion.div>
        </>
    )
}

const EditNote = ({ id, title, body, setEditting, setCards }) => {
  const [ newTitle, setNewTitle ] = useState(title);
  const [ newBody, setNewBody ] = useState(body);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCards((pv) =>
      pv.map((c) => {
        if (c.id === id) {
          return { ...c, title: newTitle, body: newBody };
        }
        return c;
      })
    );
    setEditting(false);
  }

  const handleBlur = () => {
    setEditting(false)
  }

  return (
    <>
      <motion.form layout onSubmit={handleSubmit} className="m-2">
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value || ' ')}
          onBlur={handleBlur}
          placeholder="..."
          className="w-full bg-transparent text-neutral-50 placeholder-gray-600 focus:outline-0"
        />
        <textarea
          value={newBody}
          onChange={(e) => setNewBody(e.target.value)}
          onBlur={handleBlur}
          autoFocus
          placeholder="..."
          className="w-full bg-transparent text-neutral-50 placeholder-gray-600 focus:outline-0 resize-none"
        />
        <div className="mt-1.5 flex items-center justify-end gap-1.5">
          <button
            type="submit"
            className="flex items-center gap-1.5 rounded bg-green-900 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:text-neutral-300 hover:bg-green-700"
          >
          <span>Save</span>
          </button>
          <button
            onClick={() => setEditting(false)}
            className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
          >
          Close
          </button>
        </div>
      </motion.form>
    </>
  )
}
