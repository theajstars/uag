import MoreButton from "./MoreButton";

export default function Documents() {
  return (
    <div className="card-default card-padding document-card flex-column">
      <span className="card-header">Documents</span>
      <div className="card-text card-text-large text-faint">Recent files</div>
      <div className="documents flex-column">
        <div className="document flex-row">
          <span className="document-icon">
            <i className="fas fa-file-pdf"></i>
          </span>
          <span className="document-name">Financial Plan 2020</span>
        </div>
        <div className="document flex-row">
          <span className="document-icon">
            <i className="fas fa-file-pdf"></i>
          </span>
          <span className="document-name">Management Protocols 2020</span>
        </div>
      </div>
      <MoreButton />
    </div>
  );
}
