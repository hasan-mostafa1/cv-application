export default function CV({ fields }) {
  return (
    <section className="cv">
      <section className="personal-info">
        <h1>
          {fields.firstName} {fields.lastName}
        </h1>
        <div className="details">
          <h2>{fields.position}</h2>
          <p>
            {fields.city}, {fields.country} | {fields.phoneNumber} |{" "}
            {fields.email}
          </p>
        </div>
      </section>
      <section className="summary">
        <h2>Summary</h2>
        <p>{fields.summary}</p>
      </section>
      <section className="work-experience">
        <h2>Work Experience</h2>
        <div className="experience">
          <div className="header">
            <h3>{fields.jobTitle}</h3>
            <p className="date">
              {fields.workStartDate} - {fields.workEndDate ?? "Present"}
            </p>
          </div>
          <ul className="description">
            <li>
              <p>{fields.description}</p>
            </li>
            <li>
              <p>{fields.description}</p>
            </li>
            <li>
              <p>{fields.description}</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="education">
        <h2>Education</h2>
        <div className="item">
          <div className="header">
            <h3>{fields.degree}</h3>
            <p className="date">
              {fields.educationStartDate} -{" "}
              {fields.educationEndDate ?? "Present"}
            </p>
          </div>
          <p className="institute-name">{fields.institute}</p>
        </div>
      </section>
    </section>
  );
}
