import PropTypes from 'prop-types'
import React from 'react'
import TextInput from './text-input'

const Form = props => (
    <form onSubmit={props.handleSubmit}>
                    <TextInput
                        type='text'
                        name='name'
                        label='Name'
                        placeholder='Enter name'
                        value={props.values.name}
                        onChange={props.handleChange}
                    />
                    <TextInput
                        type='email'
                        name='email'
                        label='Email'
                        placeholder='Enter email'
                        value={props.values.email}
                        onChange={props.handleChange}
                    />
                    <TextInput
                        type='password'
                        name='password'
                        label='Password'
                        placeholder='Enter password'
                        value={props.values.password}
                        onChange={props.handleChange}
                    />
                    <button type='submit'> Submit </button>
    </form>
)
Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form