export default function DirectMessages() {
  return (
    <div className="card-default card-padding dm-card flex-column">
      <span className="card-header">Direct Messages</span>
      <div className="card-text card-text-large text-faint">
        Operations Department <i className="fas fa-caret-down"></i>
      </div>
      <br />
      <div className="contacts flex-column">
        <div className="contact flex-row">
          <span className="contact-badge badge-red"></span>
          <span className="contact-name">Catherine Jacobs</span>
        </div>
        <div className="contact flex-row">
          <span className="contact-badge badge-green"></span>
          <span className="contact-name">Petrus Shikongo</span>
        </div>
        <div className="contact flex-row">
          <span className="contact-badge badge-green"></span>
          <span className="contact-name">Jan Van Der Westhuizen</span>
        </div>
        <div className="contact flex-row">
          <span className="contact-badge badge-green"></span>
          <span className="contact-name">Latoya Mathews</span>
        </div>
      </div>
    </div>
  );
}
