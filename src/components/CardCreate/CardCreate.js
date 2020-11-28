import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import CreateForm from '../CreateForm/CreateForm';
import { createCard } from '../../actions/index'

import '../../panels/Columns/Columns.css'

import Context from '../App/context'

const CardCreate = ({columnId}) => {
  const {addCard} = useContext(Context)

  const createItem = (name) => {
    return createCard(name, columnId)
      .then(doc => addCard({id: doc.id,...doc.data()}))
      .catch(console.error())
    }

  return (
      <CreateForm
      onSubmit = {createItem}
      placeholder = "Введите название карты"
      actionTitle = "Создать карту"/>
  )
}

CardCreate.propTypes = {
  columnId: PropTypes.string.isRequired
}


export default CardCreate;