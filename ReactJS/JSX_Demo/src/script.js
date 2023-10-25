import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

const rootDomElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDomElement);

// const headingElement = React.createElement('h1', {}, 'Hello from JSX!');
// const secondHeadingElement = React.createElement('h2', {}, 'JSX is cool!');

// const header = React.createElement(
//     'header',
//     { className: 'site-header' },
//     headingElement,
//     secondHeadingElement
// );

const headerJSX = (
    <header className='site-header'>
        <h1>Hello from JSX!2</h1>
        <h2>JSX is cool!2</h2>

        <p>something else here</p>
        <p>This is my FIRST SUCCESS!!!</p>
    </header>
);

root.render(headerJSX);
// root.render(header);
// root.render(headingElement);


// "test": "echo \"Error: no test specified\" && exit 1"