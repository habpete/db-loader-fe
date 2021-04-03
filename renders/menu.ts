declare var require: any

const React = require('react')
const ReactDom = require("react-dom")

import {GetMenuBlocks} from './menu';

export class Menu extends React.Component{
    render() {
        return GetMenuBlocks()
    }
}