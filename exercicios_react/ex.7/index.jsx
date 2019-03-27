import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Pereira'>
        <Member name='Pessoa 1' />
        <Member name='Pessoa 2' />
        <Member name='Pessoa 3' />
    </Family>
    , document.getElementById('app')
)