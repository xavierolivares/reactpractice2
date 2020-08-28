import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>Portals Demo</h1>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo

// Use cases: modal, popup, tooltip css concerns. Event bubbling as well