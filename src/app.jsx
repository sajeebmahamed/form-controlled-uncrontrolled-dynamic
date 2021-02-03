import React from 'react'
import Controlled from './components/controlled-form'
import SplitForm from './components/form-split-multi-component'
import Uncontrolled from './components/uncontrolled-form'

class App extends React.Component {
    render() {
        return (
            <div>
                <Uncontrolled />
                <br/>
                <br/>
                <Controlled />
                <br/>
                <br/>
                <SplitForm />
            </div>
        )
    }
}
export default App