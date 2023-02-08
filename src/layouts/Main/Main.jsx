import React from 'react'

const Main = ({children}) => {
    return (
        <main>
            <div className="container main__section">
                {children}
            </div>
        </main>
    )
}

export default Main
