import { useState } from "react";

import EmptyState from "../ui/EmptyState";
import ResourceModal from "./ResourceModal";

const ResourcePanel = ({
  title,
  eyebrow,
  description,
  items,
  fields,
  columns,
  onCreate,
  onUpdate,
  onDelete,
  isSaving,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [panelError, setPanelError] = useState("");

  const openCreate = () => {
    setSelectedItem(null);
    setPanelError("");
    setIsModalOpen(true);
  };

  const openEdit = (item) => {
    setSelectedItem(item);
    setPanelError("");
    setIsModalOpen(true);
  };

  const handleSubmit = async (payload) => {
    try {
      if (selectedItem) {
        await onUpdate({ id: selectedItem._id, ...payload });
      } else {
        await onCreate(payload);
      }
      setIsModalOpen(false);
    } catch (error) {
      setPanelError(error?.data?.message || "Unable to save changes right now.");
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Delete this item permanently?");
    if (!confirmed) {
      return;
    }

    try {
      await onDelete(id);
    } catch (error) {
      setPanelError(error?.data?.message || "Delete failed.");
    }
  };

  return (
    <>
      <div className="dashboard-panel">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-start gap-3 mb-4">
          <div>
            <p className="eyebrow mb-2">{eyebrow}</p>
            <h2 className="h2 fw-bold mb-2">{title}</h2>
            <p className="text-muted-custom mb-0">{description}</p>
          </div>
          <button className="btn btn-aurora" type="button" onClick={openCreate}>
            <i className="bi bi-plus-circle me-2" />
            Add New
          </button>
        </div>

        {panelError ? <div className="alert alert-danger">{panelError}</div> : null}

        {items.length ? (
          <div className="table-responsive admin-table-shell rounded-4 overflow-hidden">
            <table className="table admin-table align-middle">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column.label}>{column.label}</th>
                  ))}
                  <th className="text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id}>
                    {columns.map((column) => (
                      <td key={column.label}>
                        {column.render ? column.render(item) : item[column.key]}
                      </td>
                    ))}
                    <td>
                      <div className="d-flex justify-content-end gap-2">
                        <button
                          className="btn btn-sm btn-panel"
                          type="button"
                          onClick={() => openEdit(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          type="button"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState
            title={`No ${title.toLowerCase()} yet`}
            description="Use the add button to create your first item."
          />
        )}
      </div>

      <ResourceModal
        open={isModalOpen}
        title={selectedItem ? `Edit ${title}` : `Add ${title}`}
        fields={fields}
        initialValues={selectedItem}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        isSaving={isSaving}
      />
    </>
  );
};

export default ResourcePanel;

