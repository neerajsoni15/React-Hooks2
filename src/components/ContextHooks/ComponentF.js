import React, {useContext} from 'react'
import { firmContext, DomainContext } from '../../App'

function ComponentF() {
    const user = useContext(firmContext)
    const channel = useContext(DomainContext)
    return (
        <div>
            {user} Industry is a {channel} Industry 
        </div>
    )
}

export default ComponentF