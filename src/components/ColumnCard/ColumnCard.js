import React from 'react'
import PropTypes from 'prop-types'
import { Div, Card, Button } from '@vkontakte/vkui';
import {deleteCard} from '../../actions/index'
import './ColumnCard.css'

const ColumnCard = ({children, id, onDelete}) => {
  const deleteItem = () => {
    deleteCard(id)
        .then(()=> onDelete(id))
        .catch(console.error())
  }
  return (
  <Card size="l">
    <Div className = "ColumnCard__wrapper">
      {children}
      <Button mode="destructive" onClick = {deleteItem}>Удалить карту</Button>
    </Div>
  </Card>
  )
}

ColumnCard.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ColumnCard