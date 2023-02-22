function Education() {
  let edu = {
    title: "Wilton High School",
    link: "http://www.wiltonhighschool.org/pages/Wilton_High_School",
    title1: "Silvermine School of arts",
    link1: "https://www.silvermineart.org/",
  };
  return (
    <div>
      <p className="head">Education</p>
      <ul>
        <a href={edu.link}>
          <li>{edu.title}</li>
        </a>
        <a href={edu.link1}>
          <li>{edu.title1}</li>
        </a>
      </ul>
    </div>
  );
}

export default Education;
