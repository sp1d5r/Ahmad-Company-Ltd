import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Library from "./pages/Library/Library";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/library" element={<Library />} />
          {/*<Route path="/sections" component={SectionsPage} />*/}
          {/*/!* Assuming each section has a unique ID *!/*/}
          {/*<Route path="/section/:id" component={SectionPage} />*/}
          {/*/!* Assuming each component also has a unique ID *!/*/}
          {/*<Route path="/component/:id" component={ComponentPage} />*/}
          {/* Add a redirect for any other routes to the LandingPage or a 404 Not Found page */}
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
  );
}

export default App;
