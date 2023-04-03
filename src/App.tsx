import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from "./components/Header";
import Modalcomponent from "./components/Modalcomponent";
import { AppContextProvider } from "./context/Appcontext";
import { AppRouter } from "./routes/Approutes";

function AppProvider({ children }: any){
  return(
    <AppContextProvider>
      { children }
    </AppContextProvider>
  )
}

export default function App() {
  return (
    <AppProvider>
      <Header />
      <AppRouter />
      <Modalcomponent />
      <ToastContainer />
    </AppProvider>
  )
}
