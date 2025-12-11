export default function ButtonSection() {
  return (
    <div className="container">
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          marginBottom: "30px",
        }}
      >
        <h2 className="mb-4">Button Utilities</h2>

        <p>Resize your browser to see responsive buttons:</p>

        <div className="row">
          <div className="col-12 mb-3">
            {/* Always visible */}
            <button type="button" className="btn btn-primary btn-lg">
              Visible on All Screens
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            {/* Hidden on small, visible on medium+ */}
            <button
              type="button"
              className="btn btn-info btn-lg d-none d-md-block"
            >
              Hidden on Small Screens (Visible on Tablet+)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
