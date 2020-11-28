import React, {Fragment, useEffect, useContext} from 'react'
import {PanelHeader, Gallery, PanelHeaderBack } from '@vkontakte/vkui';
import Column from '../../components/Column/Column'


import Context from '../../components/App/context'

import './Columns.css'

import ColumnCreate from '../../components/ColumnCreate/ColumnCreate'
import {getColumns} from '../../actions/index';

const Columns = ({
  removeColumn,
  addColumn
}) => {

  const {goToDesks, setColumns, columns, activeDesk} = useContext(Context)

  useEffect(()=> {
    getColumns(activeDesk.id).then(setColumns)
  }, []);

  return (
  <Fragment>
    <PanelHeader left={<PanelHeaderBack onClick={goToDesks}/> }>Доска "{activeDesk.name}"</PanelHeader>
       <Gallery
        slideWidth="100%"
        align="center"
        className="Columns__list"
       >
         {columns.map(({id, name}) =>
         <Column
              key = {id}
              name = {name}
              id={id}/>)}
         <ColumnCreate/>
     </Gallery>
  </Fragment>
  )
}


export default Columns;