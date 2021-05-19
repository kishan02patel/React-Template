import ReactDom from 'react-dom';
import './index.scss';

const App = () => {
  return <h1>React template setup with webpack, babel, prettier, eslint, typescript, husky.</h1>;
};

ReactDom.render(<App />, document.getElementById('root'));
