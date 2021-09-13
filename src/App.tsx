import { ActionButton } from 'office-ui-fabric-react'
import { ActionButton as UIActionButton } from '@src/framerfx/code/ActionButton'

function App() {
  return (
    <>
      <ActionButton onClick={() => console.log('click')}>test</ActionButton>
      <UIActionButton onClick={() => console.log('click')}>test</UIActionButton>
    </>
  )
}

export default App
