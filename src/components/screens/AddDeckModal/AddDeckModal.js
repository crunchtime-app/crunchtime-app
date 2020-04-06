import React, {useState} from 'react';
import {Modal} from '../../common';

import CreateDeck from './CreateDeck';
import CreateCard from './CreateCard';

const AddTestModal = () => {
    const [isDeckView, setDeckView] = useState(true);

    return (
        <Modal>
            {isDeckView ? (
                <CreateDeck setDeckView={()=> setDeckView(false)} />
            ) : (
                <CreateCard />
            )}
        </Modal>
    );
};

export default AddTestModal;
