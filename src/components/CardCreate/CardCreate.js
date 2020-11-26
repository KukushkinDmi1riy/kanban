import React from 'react';
import PropTypes from 'prop-types'
import CreateForm from '../CreateForm/CreateForm';
import { createCard } from '../../actions/index'

import '../../panels/Columns/Columns.css'

import { Div } from '@vkontakte/vkui';

const CardCreate = ({onCreate, columnId}) => {
  const createItem = (name) => {
    return createCard(name, columnId)
      .then(doc => onCreate({id: doc.id,...doc.data()}))
      .catch(console.error())
    }

  return (
    <Div className="Column">
      <CreateForm
      onSubmit = {createItem}
      placeholder = "Введите название карты"
      actionTitle = "Создать карту"/>
    </Div>
  )
}

CardCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  columnId: PropTypes.string.isRequired
}


export default CardCreate;