/* eslint-disable prettier/prettier */
import { useState, useContext } from 'react';
import { LaptopContext } from '../contexts/LaptopContext';

export default function EditLaptop({ laptop, close }) {
  const { updateLaptop } = useContext(LaptopContext);
  const [form, setForm] = useState(laptop);

  const save = (e) => {
    e.preventDefault();
    updateLaptop(form);
    close();
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal')) close();
  };

  return (
    <div className="d-block modal show" onClick={handleBackdropClick} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h5 className="modal-title">Edit Laptop</h5>
            <button type="button" className="btn-close" onClick={close}></button>
          </div>

          <form onSubmit={save}>
              <div className="modal-body">
            <div className="row g-3">
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control"
                    placeholder="Brand"
                    value={form.brand}
                    onChange={(e) => setForm({ ...form, brand: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control"
                    placeholder="Price"
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control"
                    placeholder="CPU"
                    value={form.cpu}
                    onChange={(e) => setForm({ ...form, cpu: e.target.value })}
                  />
                </div>

                <div className="col-md-6">
                  <input
                    className="mb-3 form-control"
                    placeholder="RAM"
                    value={form.ram}
                    onChange={(e) => setForm({ ...form, ram: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    className="mb-3 form-control"
                    placeholder="Storage"
                    value={form.storage}
                    onChange={(e) => setForm({ ...form, storage: e.target.value })}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={close}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
