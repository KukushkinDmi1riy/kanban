import { useState} from 'react';

import {panel} from './constants';

const useColumnState = () => {
	const [columns, setColumns] = useState([])
  	const addColumn = (column) => {
    	setColumns([...columns, column])
  	}
  	const removeColumn = (removeId) => {
    	setColumns(columns.filter(({id})=>id !== removeId))
	}
	
	return {columns, addColumn, setColumns,removeColumn}
}

const useDesksState = () => {
	const [desks, setDesks] = useState([])
	const addDesk = (desk) => {
	  setDesks([...desks, desk])
	}
	const removeDesk = (removeId) => {
	  setDesks(desks.filter(({id})=>id !== removeId))
	}
	return {desks, addDesk, setDesks, removeDesk}
}

 const useNavState = (desks) => {
	const [activePanel, setActivePanel] = useState(panel.desks);
	const [activeDesk, setActiveDesk] = useState(null);
	
	const goToColumns = (deskId) => {
		setActiveDesk(desks.find(({id}) => id === deskId))
		setActivePanel(panel.columns) 
	}

	const goToDesks = () => {
		setActivePanel(panel.desks)
	}
	return {activePanel, activeDesk, goToColumns, goToDesks}
}

const useCardsState = () => {
	const [cards, setCards] = useState([])
    const addCard = (card) => {
      setCards([...cards, card])
    }
    const removeCard = (removeId) => {
      setCards(cards.filter(({id})=>id !== removeId))
	}
	
	return {cards, setCards, addCard, removeCard}
}

export const useAppState = () => {
    //Доски
	const desksState = useDesksState()

	//Колонки
	const columnState = useColumnState()

	//Navigation
	const navState =useNavState(desksState.desks)

	const cardsState = useCardsState()
	return {
		...desksState,
		...columnState,
		...navState,
		...cardsState
	}

}