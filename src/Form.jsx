import { useState } from 'react'

const Form = ({ add }) => {
  const [color, setColor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    add(color)
  }

  return (
    <section className="container">
      <h4>color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#aa0404"
        />
        <button type="submit" className="btn" style={{ background: color }}>
          Generate
        </button>
      </form>
    </section>
  )
}
export default Form
