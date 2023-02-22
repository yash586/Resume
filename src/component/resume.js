import Skills from "./skills";
import Education from "./education";
import Experience from "./experience";
// import "./resume.css";
function Resume() {
  let person = {
    interest1: "Drawing",
    interest2: "Photography",
    interest3: "Design",
    interest4: "Programming",
    interest5: "Computer Science",
  };
  let activities = {
    activity: "Recycling Club",
    activity1: "Gardening Club",
    activity2: "Book Club",
  };
  return (
    <div>
      <div id="header" />
      <div className="left" />
      <br />
      <br />
      <h1>Resume</h1>
      <h2>Yash Kalan</h2>
      <hr />
      <br />
      <p className="head">Interest</p>
      <ul>
        <li>{person.interest1}</li>
        <li>{person.interest2}</li>
        <li>{person.interest3}</li>
        <li>{person.interest4}</li>
        <li>{person.interest5}</li>
      </ul>
      <Skills title="Web Design with Html"></Skills>
      <Education />
      <Experience field="Software Engineer" years={2}></Experience>
      <p className="head">ExtraCircular Activities</p>
      <ul>
        <li>{activities.activity}</li>
        <li>{activities.activity1}</li>
        <li>{activities.activity2}</li>
      </ul>
    </div>
  );
}

export default Resume;
