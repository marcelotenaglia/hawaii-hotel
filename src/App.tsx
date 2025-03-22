import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

function App({children}: Props) {

  return (
    <div>
      {children}
    </div>
  )
}

export default App
