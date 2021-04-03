import { GetBody } from "./impl"

declare var require: any

const React = require('react')

export class Body extends React.Component {
    render () {
        return GetBody()
    }
}