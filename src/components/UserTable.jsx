export default function UserTable({ submissions }) {
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
        <h2 className="mb-4">User Submissions</h2>

        {/* Responsive table wrapper */}
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Loop through submissions and create row for each */}
              {submissions.map((submission, index) => (
                <tr key={index}>
                  {" "}
                  {/* key is required by React */}
                  <td>{submission.firstName}</td>
                  <td>{submission.lastName}</td>
                  <td>{submission.email}</td>
                  <td>
                    {/* Conditional badge color based on status */}
                    <span
                      className={`badge ${
                        submission.status === "Approved"
                          ? "bg-success"
                          : submission.status === "Pending"
                          ? "bg-warning"
                          : "bg-danger"
                      }`}
                    >
                      {submission.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
