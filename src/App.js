// Supports weights 200-800
import "@fontsource-variable/plus-jakarta-sans";

import logo from "./myemento-logo.svg";
import builderIcon from "./images/builder-icon.svg";
import learningIcon from "./images/learning-icon.svg";
import insightIcon from "./images/insight-icon.svg";
import supportIcon from "./images/support-icon.svg";

import "./App.scss";

function App() {
  return (
    <div
      className="container"
      style={{ background: "url(/myemento-bg.svg) top left no-repeat" }}
    >
      <div className="sidebar">
        <img src={logo} className="sidebar-logo" alt="MyEmento logo" />
      </div>
      <div className="main">
        <div className="card-row">
          <div className="card-container">
            <div className="card single">
              <div className="icon">
                <img src={builderIcon} alt="icon" />
              </div>
              <div className="title">Track</div>
            </div>
            <div className="notification">4</div>
          </div>
          <div className="card single">
            <div className="icon">
              <img src={builderIcon} alt="icon" />
            </div>
            <div className="title">
              <div className="new" />
              Builder
            </div>
          </div>
          <div className="card single">
            <div className="icon">
              <img src={learningIcon} alt="icon" />
            </div>
            <div className="title">Learning</div>
          </div>
          <div className="card single">
            <div className="icon">
              <img src={insightIcon} alt="icon" />
            </div>
            <div className="title">Insight</div>
          </div>
        </div>
        <div className="card-row">
          <div className="card max release-notes">
            <h4>Release Notes</h4>
            <div className="note">
              <b>23-4-2023: Suite 274</b>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              pellentesque eget ... <a href="#">more</a>
              <div className="video">
                <img
                  src="video-placeholder.png"
                  alt="video"
                  className="video-thumb"
                />
              </div>
            </div>
            <div className="note">
              <b>26-4-2023: Suite 273</b>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              pellentesque eget ... <a href="#">more</a>
            </div>
          </div>
          <div className="card-column">
            <div className="card-row">
              <div className="card single">
                <div className="icon">
                  <img src={supportIcon} alt="icon" />
                </div>
                <div className="title">Support</div>
              </div>
              <div className="card single"></div>
            </div>
            <div className="card double">
              <div className="label">Current Environment:</div>
              <div className="environment">
                <div className="title">Production</div>
                <button>Change</button>
              </div>
              <div className="label">Available Environments: 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
