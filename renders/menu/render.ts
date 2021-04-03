import { GetMenu } from "./impl"

declare var require: any

const React = require('react')

export class Menu extends React.Component{
    render() {
        return GetMenu()
    }
}