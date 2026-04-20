import { useEffect, useState } from "react";

const buildInitialValues = (fields, initialValues) =>
  fields.reduce((accumulator, field) => {
    const value = initialValues?.[field.name];

    if (field.type === "array") {
      accumulator[field.name] = Array.isArray(value) ? value.join(", ") : "";
      return accumulator;
    }

    if (field.type === "select") {
      accumulator[field.name] = value ?? field.options?.[0] ?? "";
      return accumulator;
    }

    if (field.type === "checkbox") {
      accumulator[field.name] = Boolean(value);
      return accumulator;
    }

    accumulator[field.name] =
      value ?? (field.type === "number" ? field.defaultValue || 0 : "");
    return accumulator;
  }, {});

const transformValues = (fields, values) =>
  fields.reduce((payload, field) => {
    const value = values[field.name];

    if (field.type === "array") {
      payload[field.name] = value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
      return payload;
    }

    if (field.type === "number") {
      payload[field.name] = Number(value);
      return payload;
    }

    if (field.type === "checkbox") {
      payload[field.name] = Boolean(value);
      return payload;
    }

    payload[field.name] = value;
    return payload;
  }, {});

const ResourceModal = ({
  open,
  title,
  fields,
  initialValues,
  onClose,
  onSubmit,
  isSaving,
}) => {
  const [values, setValues] = useState(buildInitialValues(fields, initialValues));

  useEffect(() => {
    if (open) {
      setValues(buildInitialValues(fields, initialValues));
    }
  }, [fields, initialValues, open]);

  if (!open) {
    return null;
  }

  const handleChange = (event, field) => {
    const nextValue =
      field.type === "checkbox" ? event.target.checked : event.target.value;

    setValues((current) => ({ ...current, [field.name]: nextValue }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await onSubmit(transformValues(fields, values));
  };

  return (
    <div className="modal-shell" role="presentation">
      <div className="modal-card">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-4">
          <div>
            <p className="eyebrow mb-2">Content Manager</p>
            <h3 className="h2 fw-bold mb-0">{title}</h3>
          </div>
          <button className="btn btn-panel" type="button" onClick={onClose}>
            <i className="bi bi-x-lg" />
          </button>
        </div>

        <form className="form-shell" onSubmit={handleSubmit}>
          <div className="row g-3">
            {fields.map((field) => (
              <div key={field.name} className={field.col || "col-12"}>
                {field.type === "checkbox" ? (
                  <div className="form-check form-switch mt-4">
                    <input
                      className="form-check-input"
                      id={field.name}
                      type="checkbox"
                      checked={values[field.name]}
                      onChange={(event) => handleChange(event, field)}
                    />
                    <label className="form-check-label" htmlFor={field.name}>
                      {field.label}
                    </label>
                  </div>
                ) : (
                  <>
                    <label className="form-label text-soft-custom">{field.label}</label>
                    {field.type === "textarea" ? (
                      <textarea
                        className="form-control"
                        rows={field.rows || 4}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={values[field.name]}
                        onChange={(event) => handleChange(event, field)}
                      />
                    ) : field.type === "select" ? (
                      <select
                        className="form-select"
                        required={field.required}
                        value={values[field.name]}
                        onChange={(event) => handleChange(event, field)}
                      >
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        className="form-control"
                        type={field.type === "array" ? "text" : field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={values[field.name]}
                        onChange={(event) => handleChange(event, field)}
                      />
                    )}
                    {field.type === "array" ? (
                      <div className="form-text text-soft-custom">
                        Separate items with commas.
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-end gap-3 mt-4">
            <button className="btn btn-panel" type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="btn btn-aurora" disabled={isSaving} type="submit">
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResourceModal;
