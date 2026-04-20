import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useLoginMutation } from "../api/portfolioApi";
import { setCredentials } from "../features/auth/authSlice";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [login, { isLoading }] = useLoginMutation();
  const [formState, setFormState] = useState({
    email: "admin@abdurportfolio.dev",
    password: "portfolio123",
  });
  const [error, setError] = useState("");

  if (token) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await login(formState).unwrap();
      dispatch(setCredentials(response.data));
      navigate(location.state?.from?.pathname || "/admin/dashboard", { replace: true });
    } catch (submitError) {
      setError(submitError?.data?.message || "Login failed.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Admin Login | Abdur Rehman Ansari</title>
      </Helmet>
      <section className="section-shell surface-page min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="content-card h-100">
                <p className="eyebrow mb-3">Secure Access</p>
                <h1 className="hero-title mb-4">
                  Command <span className="gradient-text">Center</span>
                </h1>
                <p className="text-muted-custom fs-5 mb-4">
                  Manage projects, skills, services, resume data, and contact messages
                  through a protected dashboard styled to match the supplied design.
                </p>
                <div className="surface-card rounded-4 p-4">
                  <div className="text-soft-custom small text-uppercase mb-2">
                    Seed Credentials
                  </div>
                  <p className="mb-1">Email: admin@abdurportfolio.dev</p>
                  <p className="mb-0">Password: portfolio123</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-card form-shell">
                <p className="eyebrow mb-3">Admin Login</p>
                <h2 className="h1 fw-bold mb-4">Authenticate to continue</h2>
                {error ? <div className="alert alert-danger">{error}</div> : null}
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label text-soft-custom">Email</label>
                      <input
                        className="form-control"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label text-soft-custom">Password</label>
                      <input
                        className="form-control"
                        name="password"
                        type="password"
                        value={formState.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button className="btn btn-aurora w-100" disabled={isLoading} type="submit">
                        {isLoading ? "Signing in..." : "Enter Dashboard"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLoginPage;

