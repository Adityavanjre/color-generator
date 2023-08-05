import SingleColor from './SingleColor'
import { nanoid } from 'nanoid'

const ColorList = ({ Colors }) => {
  return (
    <section className="colors">
      {Colors.map((Color, index) => {
        return <SingleColor key={nanoid()} color={Color} index={index} />
      })}
    </section>
  )
}
export default ColorList
