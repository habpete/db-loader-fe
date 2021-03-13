declare var require: any

const React = require('react')
const ReactDom = require('react-dom')

export class Main extends React.Component {
    render() {
        return (
            <h1>Main Page!!!</h1>
        );
    }
}

ReactDom.render(<Main />, document.getElementById('root'))