import { useFetchServerData } from 'hooks/useFetchServerData';
import { withRouter } from 'hocs/withRouter';
import { withRedux } from 'hocs/withRedux';
import { Router } from '../router/Router';

function App() {
  useFetchServerData();
  return (
    <Router />
  );
}

export default withRouter(withRedux(App));
