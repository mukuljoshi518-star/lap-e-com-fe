/* eslint-disable prettier/prettier */
import { useState, useContext } from "react";
import { LaptopContext } from "../contexts/LaptopContext";

export default function AddLaptop({ show, close }) {
  const { addLaptop } = useContext(LaptopContext);
  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    cpu: "",
    ram: "",
    storage: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const save = (e) => {
    e.preventDefault();
    addLaptop(form);
    close();
  };

  if (!show) return null; // Modal hidden

  return (
    <div
      className="d-block modal fade show"
      // tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Laptop</h5>
            <button type="button" className="btn-close" onClick={close}></button>
          </div>

          <form onSubmit={save}>
            <div className="modal-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Brand</label>
                  <input
                    name="brand"
                    type="text"
                    className="form-control"
                    value={form.brand}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Price</label>
                  <input
                    name="price"
                    type="number"
                    className="form-control"
                    value={form.price}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">CPU</label>
                  <input
                    name="cpu"
                    type="text"
                    className="form-control"
                    value={form.cpu}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">RAM</label>
                  <input
                    name="ram"
                    type="text"
                    className="form-control"
                    value={form.ram}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label">Storage</label>
                  <input
                    name="storage"
                    type="text"
                    className="form-control"
                    value={form.storage}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
              <button type="button" className="btn btn-secondary" onClick={close}>
                Cancel
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
