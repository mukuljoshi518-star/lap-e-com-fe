/* eslint-disable prettier/prettier */
import { useContext, useState } from "react";
import { LaptopContext } from "../../contexts/LaptopContext";

import AddLaptop from "../../components/AddLaptop";
import EditLaptop from "../../components/EditLaptop";

export default function LaptopList() {
  const { laptops, deleteLaptop } = useContext(LaptopContext);
  const [showAdd, setShowAdd] = useState(false);
  const [toEdit, setToEdit] = useState(null);

  return (
    <div className="py-3 container">

      {/* Modern Header */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h2 className="mb-1 fw-bold">Laptop Inventory</h2>
          <div className="ps-2 border-3 border-primary border-start text-muted">
            Manage all laptops in the system
          </div>
        </div>

        <button className="shadow-sm px-4 btn btn-primary" onClick={() => setShowAdd(true)}>
          <i className="me-1 bi bi-plus-lg"></i> Add Laptop
        </button>
      </div>

      {/* Add Modal */}
      {showAdd && <AddLaptop show={showAdd} close={() => setShowAdd(false)} />}

      {/* Edit Modal */}
      {toEdit && (
        <EditLaptop
          laptop={toEdit}
          show={!!toEdit}
          close={() => setToEdit(null)}
        />
      )}

      {/* Modern Card */}
      <div className="shadow-sm border-0 rounded-4 card">
        <div className="p-0 card-body">

          <div className="table-responsive rounded-3">
            <table className="table table-hover table-striped mb-0 align-middle">
              <thead className="table-primary text-dark">
                <tr>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>CPU</th>
                  <th>RAM</th>
                  <th>Storage</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {laptops.map((lap) => (
                  <tr key={lap.id}>
                    <td className="fw-semibold">{lap.name}</td>
                    <td>{lap.brand}</td>
                    <td>${lap.price}</td>
                    <td>{lap.cpu}</td>
                    <td>{lap.ram}</td>
                    <td>{lap.storage}</td>

                    <td className="text-center">

                      {/* Edit Button */}
                      <button
                        className="me-2 rounded-circle btn-outline-primary btn btn-sm"
                        onClick={() => setToEdit(lap)}
                        title="Edit"
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </button>

                      {/* Delete Button */}
                      <button
                        className="rounded-circle btn-outline-danger btn btn-sm"
                        onClick={() => deleteLaptop(lap.id)}
                        title="Delete"
                      >
                        <i className="bi bi-trash-fill"></i>
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </div>
    </div>
  );
}
