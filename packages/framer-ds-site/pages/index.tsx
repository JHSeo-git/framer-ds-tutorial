import type { NextPage } from 'next'
import { Button } from '../../framer-ds-react'

const Home: NextPage = () => {
  const onClick = () => {
    console.log('onClick')
  }
  return <Button onClick={onClick}>Button</Button>
}

export default Home
