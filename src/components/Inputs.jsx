import { useState } from "react";
import BtnsList from "./BtnsList";
import PersonalInfoForm from "./PersonalInfoForm";
import EducationForm from "./EducationForm";
import WorkForm from "./WorkForm";

export default function Inputs({ fields, setFields }) {
  const [activeForm, setActiveForm] = useState("personal");

  function handleChange(e, fieldName) {
    setFields({ ...fields, [fieldName]: e.target.value });
  }
  return (
    <section className="inputs">
      <BtnsList activeForm={activeForm} setActiveForm={setActiveForm} />
      {activeForm === "personal" ? (
        <PersonalInfoForm fields={fields} handleChange={handleChange} />
      ) : activeForm === "education" ? (
        <EducationForm fields={fields} handleChange={handleChange} />
      ) : (
        <WorkForm fields={fields} handleChange={handleChange} />
      )}
    </section>
  );
}
