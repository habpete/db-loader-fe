declare var require: any

const React = require('react')

import {Make} from './body'

export class Body extends React.Component {
    render () {
        return Make()
    }
}