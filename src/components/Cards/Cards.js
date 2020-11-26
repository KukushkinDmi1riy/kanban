import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'
import ColumnCard from '../ColumnCard/ColumnCard'
import {CardGrid} from '@vkontakte/vkui';

import CardCreate from '../CardCreate/CardCreate'
import { getCards} from '../../actions/index'

const Cards = ({columnId}) => {
    const [cards, setCards] = useState([])

    const addCard = (card) => {
      setCards([...cards, card])
    }
  
    const removeCard = (removeId) => {
      setCards(cards.filter(({id})=>id !== removeId))
    }
  
  useEffect(()=> {
    getCards(columnId).then(setCards)
  }, []);

    return (
        <CardGrid>
            {cards.map(({id, name})=> 
                <ColumnCard key={id} id={id} onDelete={removeCard}> 
                        {name}
                </ColumnCard>)
            }
            <CardCreate 
                onCreate={addCard}
                columnId={columnId}/>
        </CardGrid>
    )

}

Cards.propTypes = {
  columnId: PropTypes.string.isRequired
}

export default Cards;