import React, { useState } from 'react';
import {View, Panel} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Desks from '../../panels/Desks/Desks'
import Columns from '../../panels/Columns/Columns'

const panel = {
	desks: 'desks',
	columns: 'columns'
}

const App = () => {
	//Доски
	const {desks, addDesk, setDesks, removeDesk} = useDesksState()

	//Колонки
	const {columns, addColumn, setColumns, removeColumn} = useColumnState()

	//Application
	const {activePanel, activeDesk, goToColumns, goToDesks} =	useAppState(desks)

	return (
		<View activePanel={activePanel} >
			<Panel id = {panel.desks} >
				<Desks 
				onChangePanel = {goToColumns}
				setDesks = {setDesks}
				addDesk = {addDesk}
				desks = {desks}
				removeDesk = {removeDesk}
				/>
			</Panel>

			<Panel id = {panel.columns} className="Columns">
				{activeDesk && (<Columns 
					desk = {activeDesk}
					goBack = {goToDesks}
					setColumns = {setColumns}
					columns = {columns}
					removeColumn = {removeColumn}
					addColumn = {addColumn}
				/>)}
			</Panel>

		</View>
	);
}

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

const useAppState = (desks) => {
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

export default App;

