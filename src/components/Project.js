function Project(props) {
  return (
    <div className="project">
      <div className="project-preview-container">
        <img src={props.image} alt={props.alt} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Project;