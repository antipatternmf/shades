import { withRouter } from 'hocs/withRouter';
import { withRedux } from 'hocs/withRedux';
import { Router } from '../router';

function App() {
  return <Router />;
}

export default withRouter(withRedux(App));
