import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import CreateForm from '../CreateForm/CreateForm';
import '../../panels/Columns/Columns.css'
import { Div } from '@vkontakte/vkui';

import { createColumn } from '../../actions/index'

import Context from '../App/context'

const ColumnCreate = () => {

  const {addColumn, activeDesk} = useContext(Context)

  const createItem = (name) => (
    createColumn(name, activeDesk.id)
      .then(doc => addColumn({id: doc.id,...doc.data()}))
      .catch(console.error())
  )

  return (
    <Div className="Column">
      <CreateForm
      onSubmit = {createItem}
      placeholder = "Введите название колонки"
      actionTitle = "Создать колонку"/>
    </Div>
  )
};

export default ColumnCreate;