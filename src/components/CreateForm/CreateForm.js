import React, {useState} from 'react';
import PropTypes from 'prop-types'
import { Button, Card, Div, FormLayout, Input} from '@vkontakte/vkui';
import Icon24Add from '@vkontakte/icons/dist/24/add';


const modes = {
  button: 'button',
  form: 'form'
}

const statuses = {
  default: 'default',
  error: 'error'
}

const CreateForm = ({onSubmit, placeholder, actionTitle}) => {
  const [mode, setMode] = useState(modes.button)
  const [name, setName] = useState('')
  const [status, setStatus] = useState(statuses.default)

  const reset = () => {
    setStatus(statuses.default)
    setMode(modes.button)
    setName('')
  }

  const submit = (event) => {

    if(event) {
      event.preventDefault()
    }
    if (!name.trim().length) {
      setStatus(statuses.error)
      return;
    }

    onSubmit(name).then(reset)
  }


  if (mode === modes.button) {
    return (
    <Button
      before = {<Icon24Add/>}
      size="xl"
      onClick ={()=> setMode(modes.form)}
    >
      {actionTitle}
   </Button>
   )
  }

  return (
    <Card size = "l" mode = "shadow">
      <Div>
        <FormLayout onSubmit={submit}>
          <Input
            autoFocus
            type="text"
            placeholder={placeholder}
            value={name}
            status = {status}
            onChange={(event)=>setName(event.target.value)}/>
          <Div> 
            <Button
              onClick={submit}>
                {actionTitle}
            </Button>
            <Button
              mode="destructive"
              onClick={reset}>
                Отменить
            </Button>
          </Div>
        </FormLayout>
      </Div>
    </Card>
  )
}

CreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  actionTitle: PropTypes.string.isRequired,
}


export default CreateForm;