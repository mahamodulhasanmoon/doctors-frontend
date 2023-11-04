import { RouterProvider } from "react-router-dom"
import router from "./Routes/router"

function App() {
 

  return (
    <div className=' mx-auto xl:w-[1600px] max-w-screen-2xl'>
    <RouterProvider router={router}></RouterProvider>
  </div>
  )
}

export default App
