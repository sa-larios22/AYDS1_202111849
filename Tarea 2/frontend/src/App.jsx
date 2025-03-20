import { useState } from 'react'
import './App.css'

function App() {
    const [show, setShow] = useState(false)

    return (
        <>
            <h1>Tarea 2 </h1>
            <div className="card">
                {
                    show && (
                        <div className="card-body">
                            <h2>Sergio Andrés Larios Fajardo</h2>
                            <p>Carnet 202111849</p>
                        </div>
                    )
                }
                {
                    !show && (
                        <div className="card-header">
                            <button
                                className="btn btn-primary"
                                onClick={() => setShow(true)}
                            >
                                Mostrar
                            </button>
                        </div>
                    )
                }
                {
                    show && (
                        <div className="card-header">
                            <button
                                className="btn btn-primary"
                                onClick={() => setShow(false)}
                            >
                                Ocultar
                            </button>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default App
