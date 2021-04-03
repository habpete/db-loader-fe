declare var require: any

const ReactDom = require('react-dom')

import {} from './body.ts'

ReactDom.render(<Main />, document.getElementById('root'))
ReactDom.render(<Menu />, document.getElementById('navigation'))