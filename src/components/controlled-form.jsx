import React from 'react'

class Controlled extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        this.setState({ 
            name: '',
            email: '',
            password: ''
         })
    }
    render() {
        const { name, email, password } = this.state
        return (
            <div>
                <h1> Uncontrolled Form </h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className='form-control'
                        type='text'
                        name='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={this.handleChange}
                    />
                    <input
                        className='form-control'
                        type='email'
                        name='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input
                        className='form-control'
                        type='password'
                        name='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={this.handleChange}
                    />
                    <button type='submit'> Submit </button>
                </form>
            </div>
        )
    }
}

export default Controlled