import personImgUrl from "../assets/account-outline.svg";
import eduImgUrl from "../assets/school-outline.svg";
import workImgUrl from "../assets/briefcase-outline.svg";

export default function BtnsList({ activeForm, setActiveForm }) {
  return (
    <ul className="btns-list">
      <li>
        <button
          onClick={() => {
            setActiveForm("personal");
          }}
        >
          <img src={personImgUrl} alt="" />
          Personal Info
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setActiveForm("education");
          }}
        >
          <img src={eduImgUrl} alt="" />
          Education
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setActiveForm("work");
          }}
        >
          <img src={workImgUrl} alt="" />
          Work Experience
        </button>
      </li>
    </ul>
  );
}
