import { useReducer, useEffect} from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activityreducer"
import ActivityList from "./components/ActivityList"
import CaloryTracker from "./components/CaloryTracker"


function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(state.activities) )
  }, [state.activities])
  

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-lg font-bold text-white uppercase">Contador de Calorias</h1>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form
            dispatch={dispatch}
            state={state}
          />
        </div>
      </section>
      <section className="bg-gray-800 py-10 ">
        <div className="max-w-4xl mx-auto">
          <CaloryTracker
            activities={state.activities}
          />
        </div>

      </section>
      <section className="p-10 max-w-4xl mx-auto">
        <ActivityList
          activities={state.activities}
          dispatch= {dispatch}
        />
      </section>
    </>
  )
}

export default App
