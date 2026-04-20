import EmptyState from "../ui/EmptyState";
import StatusBadge from "../ui/StatusBadge";

const MessagesPanel = ({ messages, onStatusChange, isUpdating }) => (
  <div className="dashboard-panel">
    <div className="mb-4">
      <p className="eyebrow mb-2">Inbox</p>
      <h2 className="h2 fw-bold mb-2">Contact Messages</h2>
      <p className="text-muted-custom mb-0">
        Every contact form submission is stored in MongoDB and surfaced here for review.
      </p>
    </div>

    {messages.length ? (
      <div className="d-grid gap-3">
        {messages.map((message) => (
          <article key={message._id} className="surface-card rounded-4 p-4">
            <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 mb-3">
              <div>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <StatusBadge value={message.status} />
                  <span className="text-soft-custom small">
                    {new Date(message.createdAt).toLocaleString()}
                  </span>
                </div>
                <h3 className="h4 fw-bold mb-1">{message.subject}</h3>
                <p className="text-primary fw-semibold mb-0">
                  {message.name} · {message.email}
                </p>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {["new", "read", "replied"].map((status) => (
                  <button
                    key={status}
                    className="btn btn-sm btn-panel"
                    disabled={isUpdating || message.status === status}
                    type="button"
                    onClick={() => onStatusChange(message._id, status)}
                  >
                    Mark {status}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-muted-custom mb-0">{message.message}</p>
          </article>
        ))}
      </div>
    ) : (
      <EmptyState
        title="No messages yet"
        description="Messages from the contact form will appear here."
      />
    )}
  </div>
);

export default MessagesPanel;

