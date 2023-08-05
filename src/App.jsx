import { useState } from 'react'
import ColorList from './ColorList'
import Form from './Form'
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  const [colors, setColors] = useState(new Values('#aa0404').all(10))
  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10)
      setColors(newColor)
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <main>
      <ToastContainer position="top-center" />
      <Form add={addColor} />
      <ColorList Colors={colors} />
    </main>
  )
}
export default App
