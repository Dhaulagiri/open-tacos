import Link from 'next/link'
import CounterPie from '../ui/Statistics/CounterPie'
import { sanitizeName } from '../../js/utils'

interface CragRowProps {
  id: string
  area_name: string
  totalClimbs: number
  metadata: CragMetadataPartial
}

interface CragMetadataPartial {
  lat: number
  lng: number
}

/* eslint-disable-next-line */
const CragRow = ({ id, area_name: _name, totalClimbs, metadata}: CragRowProps): JSX.Element => {
  // const { lng, lat } = metadata
  const name = sanitizeName(_name)
  return (
    <Link href={`crag/${id}`}>
      <a>
        <div
          className='border-b border-b-neutral-200 py-6' onMouseOver={() => {
            // actions.finder.selectedArea(point([lng, lat], {
            //   name,
            //   icon: 'theatre-15'
            // }))
          }}
        >
          <div className='flex justify-between items-center'><div className='text-lg font-semibold text-primary'>{name}</div><div>&hearts;</div></div>
          <hr className='w-8 my-2' />
          <div className='text-secondary text-sm'>Climbs for you</div>
          <div className='flex justify-between items-center'>
            {/* <div className='text-secondary text-sm'><span className='font-semibold'>{totalClimbs - getRandomInt(totalClimbs)} climbs for you</span> · {totalClimbs} total </div> */}
            <div className='w-24 h-24'><CounterPie total={totalClimbs} forYou={totalClimbs - getRandomInt(totalClimbs)} /></div>
            <div><DistributionTable totalClimbs={totalClimbs} /></div>
          </div>
        </div>
      </a>
    </Link>
  )
}

const DistributionTable = ({ totalClimbs }): JSX.Element => {
  return (
    <table className='table-fixed text-sm border border-collapse border-slate-500 rounded'>
      <thead className=' text-center'>
        <tr>
          <th className='border border-slate-500 py-1 px-2 font-normal text-secondary text-sm'>Beginner</th>
          <th className='border border-slate-500 py-1 px-2 font-normal text-secondary text-sm'>Intermediate</th>
          <th className='border border-slate-500 py-1 px-2 font-normal text-secondary text-sm'>Advanced</th>
          <th className='border border-slate-500 py-1 px-2 font-normal text-secondary text-sm'>Expert</th>
        </tr>
      </thead>
      <tbody className='text-center text-secondary'>
        <tr>
          <td className='bg-gradient-to-r from-ob-secondary'>{getRandomInt(totalClimbs)}</td>
          <td className='py-1'>{getRandomInt(totalClimbs)}</td>
          <td className='py-1'>{getRandomInt(totalClimbs)}</td>
          <td className='py-1'>{getRandomInt(totalClimbs)}</td>
        </tr>
      </tbody>
    </table>
  )
}

function getRandomInt (max: number): number {
  return Math.floor(Math.random() * max)
}

export default CragRow