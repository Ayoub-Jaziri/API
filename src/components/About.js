import { useParams } from "react-router-dom";

function About(props) {
  console.log(props);
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h2>About Page</h2>
    </div>
  );
}
export default About;
