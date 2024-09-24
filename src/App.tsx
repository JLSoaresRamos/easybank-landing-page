import Footer from "./components/@common/Footer";
import Header from "./components/@common/Header";
import ArticlesSec from "./components/ArticlesSec";
import IntroductionSec from "./components/IntroductionSec";
import QualitiesSec from "./components/QualitiesSec";

import "./main.scss";

function App() {
	return (
		<main className="main">
			<Header />
			<IntroductionSec />
			<QualitiesSec />
			<ArticlesSec />
			<Footer />
		</main>
	);
}

export default App;
