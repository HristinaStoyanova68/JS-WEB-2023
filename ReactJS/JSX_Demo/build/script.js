import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var rootDomElement = document.getElementById('root');

var root = ReactDOM.createRoot(rootDomElement);

// const headingElement = React.createElement('h1', {}, 'Hello from JSX!');
// const secondHeadingElement = React.createElement('h2', {}, 'JSX is cool!');

// const header = React.createElement(
//     'header',
//     { className: 'site-header' },
//     headingElement,
//     secondHeadingElement
// );

// const Footer = () => {
//     return React.createElement(
//         'div',
//         {className: "site-footer"},
//         React.createElement(
//             'p',
//             {},
//             'All rights reserved'
//         ),
//     );
// };

var Footer = function Footer() {
    return React.createElement(
        'div',
        { className: 'site-footer' },
        React.createElement(
            'p',
            null,
            'All rights reserved \xA9'
        )
    );
};

var headerJSX = React.createElement(
    'div',
    null,
    React.createElement(
        'header',
        { className: 'site-header' },
        React.createElement(
            'h1',
            null,
            'Hello from JSX!2'
        ),
        React.createElement(
            'h2',
            null,
            'JSX is cool!2'
        ),
        React.createElement(
            'p',
            null,
            'something else here'
        )
    ),
    React.createElement(Footer, null)
);

root.render(headerJSX);
// root.render(header);
// root.render(headingElement);


// "test": "echo \"Error: no test specified\" && exit 1"