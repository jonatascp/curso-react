import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Pereira'>
        <Member name='Pessoa 1' />
    </Family>
    , document.getElementById('app')
)