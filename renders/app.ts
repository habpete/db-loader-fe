import { Body } from './body/render'
import { Menu } from './menu/render'

declare var require: any

const ReactDom = require('react-dom')

ReactDom.render(<Body />, document.getElementById('root'));
ReactDom.render(<Menu />, document.getElementById('navigation'))