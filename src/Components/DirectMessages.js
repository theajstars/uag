import Contacts from "../Assets/JSON/Contacts.json";
export default function DirectMessages() {
  return (
    <div className="card-default card-padding dm-card flex-column">
      <span className="card-header">Direct Messages</span>
      <div className="card-text card-text-large text-faint">
        Operations Department <i className="fas fa-caret-down"></i>
      </div>
      <br />

      <div className="contacts flex-column">
        {Contacts.contacts.map((contact) => {
          return (
            <div className="contact flex-row" key={contact.key}>
              <span
                className={`contact-badge ${
                  contact.online ? "badge-green" : "badge-red"
                }`}
              ></span>
              <span className="contact-name">{contact.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
