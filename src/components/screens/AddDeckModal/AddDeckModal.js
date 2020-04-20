import React, {useState} from 'react';
import {Modal} from '../../common';

import CreateDeck from './CreateDeck';
import CreateCard from './CreateCard';

const AddTestModal = () => {
    const [deckId, setDeckId] = useState('');

    return (
        <Modal>
            {!deckId ? (
                <CreateDeck setDeckId={setDeckId} />
            ) : (
                <CreateCard deckId={deckId} />
            )}
        </Modal>
    );
};

export default AddTestModal;
