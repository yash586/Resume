function Experience({ field, years }) {
  return (
    <div>
      <p className="head">Experience</p>
      <ul>
        <li>
          {field} with overall {years} of experience
        </li>
      </ul>
    </div>
  );
}
export default Experience;
