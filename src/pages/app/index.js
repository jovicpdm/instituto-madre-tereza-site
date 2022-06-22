import 'react-slideshow-image/dist/styles.css';

import ActionSection from "../../sections/actionsSection";
import Header from "../../components/header";
import InfoSection from "../../sections/infoSection";
import InitialSection from "../../sections/initialSection";
import LocalSection from '../../sections/localSection';
import TeamSection from '../../sections/teamSection';
import "./styles.css";
import OperatingLocations from '../../sections/operatingLocations';

const App = () => {
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Roboto:wght@700&display=swap');
      </style>
      <Header />
      <body>
        <InitialSection />
        <InfoSection />
        <ActionSection />
        <LocalSection />
        <TeamSection />
        <OperatingLocations />
      </body>
      <footer></footer>
    </div>
  );
};

export default App;
