import React from 'react'
import PropTypes from 'prop-types'
import { Div, Card, Header, Button} from '@vkontakte/vkui';
import './Column.css'
import Cards from '../Cards/Cards'

import { deleteColumn } from '../../actions/index'

const Column = ({name, id, onDelete}) => {
  const deleteItem = () => {
       deleteColumn()
        .then(()=> onDelete(id))
        .catch(console.error())
  }

  return (
    <Div className="Column">
      <div className="Column__header">
        <Header>{name}</Header>
        <Button
          mode="destructive"
          onClick={deleteItem}
          >Удалить колонку
        </Button>
      </div>


      <Card className="Column__wrapper">
                <Cards columnId={id}/>
      </Card>
    </Div>
  )
}

Column.propTypes ={
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Column;