import Image from 'next/image'
import { FirstHeader } from './_sections/header_first'
import { Stats } from './_sections/stats'

export default function Home() {
  return (
    <div>
      <FirstHeader />
      <Stats />
    </div>
  )
}
