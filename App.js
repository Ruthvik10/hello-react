/**
 * <div id="parent">
 *  <div id="child1">
 *    <h1>I'm a h1 tag</h1>
 *    <h2>I'm a h2 tag</h2>
 *  </div>
 * <div id="child2">
 *    <h1>I'm a h1 tag</h1>
 *    <h2>I'm a h2 tag</h2>
 *  </div>
 * </div>
 */

/**
 * React is a JS library and React elements are JS objects at the end of the day.
 * They are not HTML elements yet.
 * ReactDOM is responsible for converting the React elements (JS objects) to HTML
 * ReactDOM is separate from the React library itself because React does not have concern itself with
 * kind of platforms it is going to render on. It could be a browser or mobile and so on.
 * That responsibility is offloaded to a different library and in the case of web, it is ReactDOM
 */
const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child1' }, [
        React.createElement('h1', { className: 'heading' }, "I'm a h1 tag"),
        React.createElement('h2', {}, "I'm a h2 tag"),
    ]),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {}, "I'm a h1 tag"),
        React.createElement('h2', {}, "I'm a h2 tag"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
