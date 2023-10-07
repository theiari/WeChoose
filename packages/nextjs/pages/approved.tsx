import { useState } from 'react';

type Idea = {
    title: string;
    description: string;
    ipfsLink: string;
    dateApproved: string;
    tenderLink: string;
};

const approvedIdeas: Idea[] = [
    {
        title: 'Bike Lane Expansion',
        description: 'Expand bike lanes throughout the city to promote cycling as a sustainable mode of transportation.',
        ipfsLink: 'https://ipfs.io/ipfs/QmX9wJ6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5',
        dateApproved: '2022-01-01',
        tenderLink: 'https://example.com/bike-lane-tender',
    },
    {
        title: 'Community Garden Initiative',
        description: 'Create community gardens throughout the city to promote sustainable food production and community engagement.',
        ipfsLink: 'https://ipfs.io/ipfs/QmX9wJ6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5J6J8J9z5t5',
        dateApproved: '2022-01-15',
        tenderLink: 'https://example.com/community-garden-tender',
    },
];

const ApprovedPage = () => {
    const [selectedIdea, setSelectedIdea] = useState<Idea | null>(null);

    const handleIdeaClick = (idea: Idea) => {
        setSelectedIdea(idea);
    };

    const handleModalClose = () => {
        setSelectedIdea(null);
    };

    return (
        <div>
            <h1>Approved Ideas</h1>
            <ul>
                {approvedIdeas.map((idea) => (
                    <li key={idea.title}>
                        <h2>{idea.title}</h2>
                        <p>{idea.description}</p>
                        <p>Date Approved: {idea.dateApproved}</p>
                        <a href={idea.tenderLink}>Tender Link</a>
                        <button onClick={() => handleIdeaClick(idea)}>View Details</button>
                    </li>
                ))}
            </ul>
            {selectedIdea && (
                <div>
                    <h2>{selectedIdea.title}</h2>
                    <p>{selectedIdea.description}</p>
                    <p>Date Approved: {selectedIdea.dateApproved}</p>
                    <a href={selectedIdea.ipfsLink}>IPFS Link</a>
                    <button onClick={handleModalClose}>Close</button>
                </div>
            )}
        </div>
    );
};

export default ApprovedPage;
