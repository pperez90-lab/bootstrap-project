export default function RegistrationForm({
  onSubmit,
  formData,
  onChange,
  validated,
}) {
  return (
    <div className="container">
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          marginBottom: "30px",
          marginTop: "30px",
        }}
      >
        <h2 className="mb-4">Registration Form</h2>

        {/* Form with conditional validation class */}
        <form
          className={
            validated ? "needs-validation was-validated" : "needs-validation"
          }
          onSubmit={onSubmit} // Use prop from parent
          noValidate // Disable browser validation (we handle it)
        >
          {/* Two-column layout: First Name and Last Name side-by-side */}
          <div className="row mb-3">
            <div className="col-md-6">
              {" "}
              {/* 50% on tablets+ */}
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName" // Must match state key
                value={formData.firstName} // Controlled input
                onChange={onChange} // Use prop from parent
                required // HTML validation
              />
              <div className="invalid-feedback">
                {" "}
                {/* Shows when validation fails */}
                Please provide a first name.
              </div>
            </div>

            <div className="col-md-6">
              {" "}
              {/* 50% on tablets+ */}
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
                required
              />
              <div className="invalid-feedback">
                Please provide a last name.
              </div>
            </div>
          </div>

          {/* Email field (full width) */}
          <div className="row mb-3">
            <div className="col-12">
              {" "}
              {/* 100% width */}
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email" // Browser validates email format
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                required
              />
              <div className="invalid-feedback">
                Please provide a valid email.
              </div>
            </div>
          </div>

          {/* Password field */}
          <div className="row mb-3">
            <div className="col-12">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password" // Hides input
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={onChange}
                required
              />
              <div className="invalid-feedback">Please provide a password.</div>
            </div>
          </div>

          {/* Terms checkbox */}
          <div className="row mb-3">
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={onChange}
                  required
                />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree to the terms.
                </div>
              </div>
            </div>
          </div>

          {/* Submit button */}
          <div className="row">
            <div className="col-12">
              <button type="submit" className="btn btn-success btn-lg">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
