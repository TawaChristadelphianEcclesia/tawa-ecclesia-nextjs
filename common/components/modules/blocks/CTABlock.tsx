import React from "react";

export type ICTABlock = {
    title: string;
    description: string;
};

const EventsBlock: React.FC<ICTABlock> = (props) => (
    <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
);

export default EventsBlock;
