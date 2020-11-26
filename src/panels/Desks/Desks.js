import React, {Fragment} from 'react';
import PropTypes from 'prop-types'

import {PanelHeader, Div} from '@vkontakte/vkui';
import DeskCreate from '../../components/DeskCreate/DeskCreate'

import DeskList from '../../components/DeskList/DeskList';


const Desks = ({onChangePanel, setDesks, addDesk, desks, removeDesk}) => {
  return(
    <Fragment>
      <PanelHeader>Мои доски</PanelHeader>

      <Div>
        <DeskCreate onCreate={addDesk}/>
      </Div>

      <DeskList 
        desks= {desks}
        onLoadDesks = {setDesks}
        onDelete={removeDesk}
        onDeskClick = {onChangePanel}
      />
    </Fragment>
  )
}

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
  setDesks: PropTypes.func.isRequired,
  desks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  removeDesk: PropTypes.func.isRequired,
  addDesk: PropTypes.func.isRequired,

};


export default Desks