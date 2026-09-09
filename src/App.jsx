import ReactLogo from './assets/react-logo.png'
import './styles.css'

const content = [
  "React is extremely popular",
  "It makes building complex, interactive UIs a breeze",
  "It's powerful & flexible",
  "It has a very active and versatile ecosystem"
];

function App() {
  return (
    <div>
      <header>
        <img src={ReactLogo} alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button>Why React?</button>
          <button>Core Features</button>
          <button>Related Resources</button>
        </menu>

        <div id="tab-content">
          <ul>
            <li>{content[0]}</li>
            <li>{content[1]}</li>
            <li>{content[2]}</li>
            <li>{content[3]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;