import { Box, Flex, Spacer } from '@chakra-ui/react'
import './App.css'
import SamplePage from './pages/SamplePage'
import SampleGrid from './pages/SampleGrid'
import AmountInput from './components/AmountInput'

function App() {

  return (
    <Flex direction={"column"} gap={'8'}>
      <Flex w='600px'>
        <SamplePage />
        <Spacer/>
        <SamplePage />
      </Flex>
      <Flex w='600px'>
        <SampleGrid />
      </Flex>
      <Flex>
        <AmountInput />
      </Flex>
    </Flex>
  )
}

export default App
