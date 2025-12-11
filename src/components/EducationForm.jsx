export default function EducationForm({ fields, handleChange }) {
  return (
    <form>
      <fieldset>
        <legend>Education</legend>
        <label>
          Degree
          <input
            type="text"
            value={fields.degree}
            onChange={(e) => {
              handleChange(e, "degree");
            }}
          />
        </label>
        <label>
          Institute Name
          <input
            type="text"
            value={fields.institute}
            onChange={(e) => {
              handleChange(e, "institute");
            }}
          />
        </label>
        <label>
          Start Date
          <input
            type="date"
            value={fields.educationStartDate}
            onChange={(e) => {
              handleChange(e, "educationStartDate");
            }}
          />
        </label>
        <label>
          Have you graduated?
          <input
            type="checkbox"
            value={fields.graduated}
            onChange={(e) => {
              handleChange(e, "graduated");
            }}
          />
        </label>
        {fields.graduated && (
          <label>
            End Date
            <input
              type="date"
              value={fields.endDate}
              onChange={(e) => {
                handleChange(e, "educationEndDate");
              }}
            />
          </label>
        )}
      </fieldset>
    </form>
  );
}
