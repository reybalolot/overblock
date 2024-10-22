import { useState } from "react";
import { Card, AddCard, DropIndicator } from "../components/kanban/Card.jsx";
import { motion } from "framer-motion";
import Trash from '../components/kanban/Trash.jsx';

const Kanban = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
    <>
      <div className="h-screen w-full bg-neutral-900 text-neutral-50">
        <div className="p-2 m-2 font-bold flex">
          <div className="text-white">Kanban</div>
          <div className="text-white mx-2">|</div>
          <div className="text-tertiary">Thursday, October 17, 2024</div>
        </div>
        <hr className="mx-3"/>
        <div className="h-auto">
          <div className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-1 h-full w-full gap-3  overflow-y-scroll p-5 pt-3">
            <Column
              title="Notes"
              column="notes"
              headingColor="text-neutral-300"
              cards={cards}
              setCards={setCards}
              />
            <Column
              title="TODO"
              column="todo"
              headingColor="text-yellow-200"
              cards={cards}
              setCards={setCards}
              />
            <Column
              title="In progress"
              column="doing"
              headingColor="text-blue-200"
              cards={cards}
              setCards={setCards}
              />
            <Column
              title="Complete"
              column="done"
              headingColor="text-emerald-200"
              cards={cards}
              setCards={setCards}
              />
            <Trash className="md:grid md:grid-cols-1" setCards={setCards} />
          </div>
        </div>
      </div>
    </>
  );
};

const Column = ({ title, headingColor, cards, column, setCards, colVariants }) => {
  const [active, setActive] = useState(false);

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

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (

    <div className="w-auto shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <motion.div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        variants={gridContainerVariants}
        initial='hidden'
        animate='show'
        className={`w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
        >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
        {column !== 'done' && column !== 'doing' ? (
          <AddCard column={column} setCards={setCards} />
        ) : (
          <p className="text-center text-xs text-neutral-600">Drag card here 👆</p>
        )}
      </motion.div>
    </div>
  );
};

const DEFAULT_CARDS = [
  // BACKLOG
  { title: "Look into render bug in dashboard", id: "1", column: "notes" },
  { title: "SOX compliance checklist", id: "2", column: "notes" },
  { title: "[SPIKE] Migrate to Azure", id: "3", column: "notes" },
  { title: "Document Notifications service", id: "4", column: "notes" },
  { title: "Document Notifications service", id: "11", column: "notes" },
  { title: "Document Notifications service", id: "12", column: "notes" },
  { title: "Document Notifications service", id: "13", column: "notes" },
  // TODO
  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "todo",
  },
  { title: "Postmortem for outage", id: "6", column: "todo" },
  { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

  // DOING
  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "doing",
  },
  { title: "Add logging to daily CRON", id: "9", column: "doing" },
  // DONE
  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "done",
  },
];

export default Kanban;
