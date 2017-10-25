import React from "react";
import Loader from "../LoaderContainer";
import { Jumbotron, Button } from "reactstrap";

import { strava } from "../../config";
import Activites from "../Activities"

const api = require("../../helpers/api");

class ActivitiesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      allActivities: [{}]
    };
  }

  getData(url) {
    api.fetchStrava(url).then(response => this.setData(response));
  }

  setData(result) {
    console.table(result);
    this.setState({
      loading: false,
      result: result
    });
  }

  componentDidMount() {
    let url = `${strava.path.base}${strava.userId}${strava.path
      .activities}?${strava.path.token}${strava.token}`;
    this.getData(url);
  }

  render() {
    const { loading, result } = this.state;

    return loading ? <Loader /> : <Activites result={result} />;
  }
}

// const ActivitiesContainer = (props) => {
//     return (
//       <div>
//         <Jumbotron>
//           <h1 className="display-3">Hello, Activites!</h1>
//           <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
//           <hr className="my-2" />
//           <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
//           <p className="lead">
//             <Button color="primary">Learn More</Button>
//           </p>
//         </Jumbotron>
//       </div>
//     );
//   };

export default ActivitiesContainer;
