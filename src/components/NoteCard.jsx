const NoteCard = ({imgLink}) => {

    return (
        <>
            <img className="mb-3 rounded-md" draggable src={imgLink} alt="" />
        </>
    )
}

export default NoteCard;
