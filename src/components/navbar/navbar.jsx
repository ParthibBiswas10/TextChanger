export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-body-${props.mode} bg-${props.mode}  fixed-top`}
      >
        <div className="container-fluid">
          <h3 className="ms-3">Text Changer</h3>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
