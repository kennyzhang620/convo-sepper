import Image from 'next/image'
import Beecomb from "../../public/GUI/honeycomb.png"

export function Bottombar() {
    return (
      <div>
      <Image 
      src={Beecomb} 
      alt="Honeycomb background"
      width={500}
      height={300}
      className='bottomcomp vrcomp'
      style={{transform:'scale(5)'}}
    />
    </div>);
}