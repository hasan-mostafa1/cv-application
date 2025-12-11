export default function PersonalInfoForm({ fields, handleChange }) {
  return (
    <form>
      <fieldset>
        <legend>Introduction</legend>
        <div className="form-control">
          <label>
            First Name
            <input
              type="text"
              value={fields.firstName}
              onChange={(e) => {
                handleChange(e, "firstName");
              }}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              value={fields.lastName}
              onChange={(e) => {
                handleChange(e, "lastName");
              }}
            />
          </label>
        </div>
        <label>
          Position Title
          <input
            type="text"
            value={fields.position}
            onChange={(e) => {
              handleChange(e, "position");
            }}
          />
        </label>
        <label>
          Summary
          <textarea
            name="summary"
            onChange={(e) => {
              handleChange(e, "summary");
            }}
          >
            {fields.summary}
          </textarea>
        </label>
      </fieldset>
      <fieldset>
        <legend>Contact</legend>
        <label>
          Phone Number
          <input
            type="number"
            value={fields.phoneNumber}
            onChange={(e) => {
              handleChange(e, "phoneNumber");
            }}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={(e) => {
              handleChange(e, "email");
            }}
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Address</legend>
        <label>
          Country
          <input
            type="text"
            value={fields.country}
            onChange={(e) => {
              handleChange(e, "country");
            }}
          />
        </label>
        <label>
          City
          <input
            type="text"
            value={fields.city}
            onChange={(e) => {
              handleChange(e, "city");
            }}
          />
        </label>
      </fieldset>
    </form>
  );
}
