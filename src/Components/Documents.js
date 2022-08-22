import MoreButton from "./MoreButton";
import documents from "../Assets/JSON/Documents.json";

export default function Documents() {
  return (
    <div className="card-default card-padding document-card flex-column">
      <span className="card-header">Documents</span>
      <div className="card-text card-text-large text-faint">Recent files</div>
      <div className="documents flex-column">
        {documents.documents.map((doc, index) => {
          return (
            <div className="document flex-row" key={`key${index}`}>
              <span className="document-icon">
                <i className="fas fa-file-pdf"></i>
              </span>
              <span className="document-name">{doc.title}</span>
            </div>
          );
        })}
      </div>
      <MoreButton />
    </div>
  );
}
