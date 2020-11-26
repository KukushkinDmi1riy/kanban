import React, {Fragment, useEffect} from 'react'
import {PanelHeader, Gallery, PanelHeaderBack } from '@vkontakte/vkui';
import Column from '../../components/Column/Column'
import PropTypes from 'prop-types'

import './Columns.css'

import ColumnCreate from '../../components/ColumnCreate/ColumnCreate'
import {getColumns} from '../../actions/index';

const Columns = ({
  goBack, 
  setColumns,
  columns,
  removeColumn,
  addColumn,
  desk
}) => {

  useEffect(()=> {
    getColumns(desk.id).then(setColumns)
  }, []);

  return (
  <Fragment>
    <PanelHeader left={<PanelHeaderBack onClick={goBack}/> }>Доска "{desk.name}"</PanelHeader>
       <Gallery
        slideWidth="100%"
        align="center"
        className="Columns__list"
       >
         {columns.map(({id, name}) =>
         <Column
              key = {id}
              name = {name}
              id={id}
              onDelete = {removeColumn}/>)}
         <ColumnCreate 
              onCreate={addColumn}
              deskId = {desk.id}/>
     </Gallery>
  </Fragment>
  )
}



Columns.propTypes = {
  goBack: PropTypes.func.isRequired,
  setColumns: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    deskId: PropTypes.string.isRequired
  })).isRequired,
  removeColumn: PropTypes.func.isRequired,
  addColumn: PropTypes.func.isRequired,
  desk: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

export default Columns;