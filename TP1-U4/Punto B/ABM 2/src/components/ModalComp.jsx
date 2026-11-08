import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { emailAlreadyExists } from '../customers.js'

export default function ModalComp({ data, dataEdit, isOpen, onClose, onSave }) {
  const [name, setName] = useState(dataEdit?.name ?? '')
  const [email, setEmail] = useState(dataEdit?.email ?? '')

  function handleSave(event) {
    event.preventDefault()
    const customer = { name: name.trim(), email: email.trim() }
    if (!customer.name || !customer.email) return

    if (emailAlreadyExists(data, customer.email, dataEdit?.index)) {
      window.alert('Este correo electrónico ya está registrado.')
      return
    }

    const customers = dataEdit
      ? data.map((item, index) => index === dataEdit.index ? customer : item)
      : [...data, customer]

    onSave(customers)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSave}>
        <ModalHeader>Registro de clientes</ModalHeader>
        <ModalCloseButton type="button" aria-label="Cerrar" />
        <ModalBody>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel htmlFor="customer-name">Nombre</FormLabel>
              <Input
                id="customer-name"
                value={name}
                onChange={(event) => {
                  event.currentTarget.setCustomValidity('')
                  setName(event.currentTarget.value)
                }}
                onInvalid={(event) => {
                  event.currentTarget.setCustomValidity('Ingresá el nombre.')
                }}
                required
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="customer-email">Correo electrónico</FormLabel>
              <Input
                id="customer-email"
                type="email"
                value={email}
                onChange={(event) => {
                  event.currentTarget.setCustomValidity('')
                  setEmail(event.currentTarget.value)
                }}
                onInvalid={(event) => {
                  const input = event.currentTarget
                  input.setCustomValidity(input.validity.valueMissing
                    ? 'Ingresá el correo electrónico.'
                    : 'Ingresá un correo electrónico válido.')
                }}
                required
              />
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalFooter justifyContent="start">
          <Button type="submit" colorScheme="green" mr={3}>GUARDAR</Button>
          <Button type="button" colorScheme="red" onClick={onClose}>CANCELAR</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
