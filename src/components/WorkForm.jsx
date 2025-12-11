export default function WorkForm({ fields, handleChange }) {
  return (
    <form>
      <fieldset>
        <legend>Work</legend>
        <label>
          Job Title
          <input
            type="text"
            value={fields.jobTitle}
            onChange={(e) => {
              handleChange(e, "jobTitle");
            }}
          />
        </label>
        <label>
          Start Date
          <input
            type="date"
            value={fields.workStartDate}
            onChange={(e) => {
              handleChange(e, "workStartDate");
            }}
          />
        </label>
        <label>
          Have you stopped working here?
          <input
            type="checkbox"
            value={fields.ongoing}
            onChange={(e) => {
              handleChange(e, "ongoing");
            }}
          />
        </label>
        {fields.ongoing && (
          <label>
            End Date
            <input
              type="date"
              value={fields.workEndDate}
              onChange={(e) => {
                handleChange(e, "workEndDate");
              }}
            />
          </label>
        )}
        <label>
          Description
          <textarea
            onChange={(e) => {
              handleChange(e, "description");
            }}
          >
            {fields.description}
          </textarea>
        </label>
      </fieldset>
    </form>
  );
}
