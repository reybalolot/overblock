import { motion } from "framer-motion";

export const Card = ({title, body}) => {
    return (
        <>
            <div className="p-2 text-sm text-white rounded border border-neutral-700 bg-transparent break-inside-avoid my-2">
                <p className="my-2">{title}</p>
                <p className="my-2 text-gray-500">{body}</p>
            </div>
        </>
    )
}
