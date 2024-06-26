import { useState } from "react";

import Stats from "./Stats";
import Textarea from "./Textarea";
import Footer from "./Footer";
import MainContainer from "./MainContainer";
import Header from "./Header";

function App() {
  const [stats, setStats] = useState({
    numberOfWords: 0,
    numberOfCharacters: 0,
    twitterCharactersLeft: 280,
    linkedInCharactersLeft: 3000,
  });

  return (
    <>
      <Header />

      <MainContainer>
        <Textarea setStats={setStats} />
        <Stats stats={stats} />
      </MainContainer>

      <Footer />
    </>
  );
}

export default App;
