export default function ImageGallery() {
  return (
    <div className="container">
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <h2 className="mb-4">Image Gallery</h2>

        {/* Full-width responsive image */}
        <div className="container-fluid">
          <img
            src="https://placehold.in/600x300"
            className="img-fluid rounded"
            alt="Main image"
          />
        </div>

        {/* Circular profile image */}
        <img
          src="https://placehold.in/150x150"
          className="rounded-circle"
          alt="Profile"
          style={{
            maxWidth: "200px",
            margin: "20px auto",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
