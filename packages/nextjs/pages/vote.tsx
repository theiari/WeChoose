import { useState } from "react";

type Idea = {
    title: string;
    description: string;
    votes: number;
};

const ideas: Idea[] = [
    {
        title: "Idea 1",
        description: "This is the first idea",
        votes: 0,
    },
    {
        title: "Idea 2",
        description: "This is the second idea",
        votes: 0,
    },
    {
        title: "Idea 3",
        description: "This is the third idea",
        votes: 0,
    },
];

const VotePage = () => {
    const [ideasState, setIdeasState] = useState<Idea[]>(ideas);

    const handleVote = (index: number) => {
        const newIdeas = [...ideasState];
        newIdeas[index].votes++;
        setIdeasState(newIdeas);
    };

    return (
        <div>
            {ideasState.map((idea, index) => (
                <div key={index}>
                    <h2>{idea.title}</h2>
                    <p>{idea.description}</p>
                    <p>Votes: {idea.votes}</p>
                    <button onClick={() => handleVote(index)}>Vote</button>
                </div>
            ))}
        </div>
    );
};

export default VotePage;
