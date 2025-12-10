/* eslint-disable prettier/prettier */
import LaptopList from "../../pages/admin/LaptopList";

export default function AdminDashboard() {
  return (
    <div className="bg-light px-3 py-4 admin-wrapper min-vh-100">
      
      {/* Modern Header */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h1 className="mb-0 text-primary fw-bold">Admin Dashboard</h1>
        <span className="bg-primary-subtle px-3 py-2 border rounded-pill text-primary badge">
          Laptop Management
        </span>
      </div>

      {/* Content */}
      <LaptopList />
    </div>
  );
}
