import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'animate.css'
import {QueryClient, QueryClientProvider} from "react-query"
import {BrowserRouter, HashRouter} from "react-router-dom"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HashRouter>
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        </HashRouter>
    </React.StrictMode>,
)
