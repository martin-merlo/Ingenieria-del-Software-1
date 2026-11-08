import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import ModalComp from './components/ModalComp.jsx'
import { loadCustomers, STORAGE_KEY } from './customers.js'

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [data, setData] = useState(loadCustomers)
  const [dataEdit, setDataEdit] = useState(null)
  const isMobile = useBreakpointValue({ base: true, lg: false })
  const cellPadding = isMobile ? 3 : 6

  function commitCustomers(customers) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customers))
    setData(customers)
  }

  function openForm(customer = null) {
    setDataEdit(customer)
    onOpen()
  }

  function removeCustomer(email) {
    commitCustomers(data.filter((customer) => customer.email !== email))
  }

  return (
    <Flex justify="center" fontSize="20px" fontFamily="Poppins, sans-serif">
      <Box maxW={800} w="100%" h="100dvh" py={10} px={2} display="flex" flexDir="column">
        <Box>
          <Button colorScheme="blue" onClick={() => openForm()}>
            NUEVO CLIENTE
          </Button>
        </Box>

        <Box overflow="auto">
          <Table mt={6} aria-label="Clientes">
            <Thead>
              <Tr>
                <Th px={cellPadding} fontSize="20px" scope="col">Nombre</Th>
                <Th px={cellPadding} fontSize="20px" scope="col">Correo electrónico</Th>
                <Th p={0} scope="col" aria-label="Editar" />
                <Th p={0} scope="col" aria-label="Eliminar" />
              </Tr>
            </Thead>
            <Tbody>
              {data.map(({ name, email }, index) => (
                <Tr key={email} _hover={{ bg: 'gray.100' }}>
                  <Td maxW={100} px={cellPadding} overflowWrap="anywhere">{name}</Td>
                  <Td maxW={100} px={cellPadding} overflowWrap="anywhere">{email}</Td>
                  <Td p={0} w={isMobile ? 10 : 16}>
                    <IconButton
                      aria-label={`Editar ${name}`}
                      icon={<EditIcon boxSize={5} />}
                      size="sm"
                      variant="ghost"
                      onClick={() => openForm({ name, email, index })}
                    />
                  </Td>
                  <Td p={0} w={isMobile ? 10 : 16}>
                    <IconButton
                      aria-label={`Eliminar ${name}`}
                      icon={<DeleteIcon boxSize={5} />}
                      size="sm"
                      variant="ghost"
                      onClick={() => removeCustomer(email)}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>

      {isOpen && (
        <ModalComp
          isOpen={isOpen}
          onClose={onClose}
          data={data}
          dataEdit={dataEdit}
          onSave={commitCustomers}
        />
      )}
    </Flex>
  )
}
