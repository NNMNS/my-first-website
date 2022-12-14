import logo from './logo.svg';

import './App.css';
//import { Button } from '@chakra-ui/react'
import { Button, ButtonGroup,Spinner, Input } from '@chakra-ui/react'
import DisplayJohn, {JohnProfile} from "./components/DisplayJohn.js";
function App() {
  return (
    <div>
        <Button colorScheme="green" size='xs'>Button</Button>
        <Button colorScheme='red' size='sm'>Red</Button>
        <Button colorScheme='yellow' size='md'>Yellow</Button>
      
        <Spinner size='xs' color='blue.500' />
        <Spinner size='sm' color='red.500'/>
        <Spinner size='md' color='green.500'/>

        <Input variant='outline' placeholder='extra small size' size='xs' />
        <Input variant='filled' placeholder='small size' size='sm' />
        <Input variant='flushed' placeholder='medium size' size='md' />
      
      <DisplayJohn/>
      <JohnProfile/>
      </div>
      
  );
}


export default App;
