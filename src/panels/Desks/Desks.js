import React, {Fragment} from 'react';

import {PanelHeader, Div} from '@vkontakte/vkui';
import DeskCreate from '../../components/DeskCreate/DeskCreate'

import DeskList from '../../components/DeskList/DeskList';


const Desks = () => {

  return(
    <Fragment>
      <PanelHeader>Мои доски</PanelHeader>

      <Div>
        <DeskCreate/>
      </Div>

      <DeskList />
    </Fragment>
  )
}


export default Desks