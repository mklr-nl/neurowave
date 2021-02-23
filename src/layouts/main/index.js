import "src/components/Header";
import "src/components/Intro";
import "src/components/Footer";
import "src/components/Infoboxes";
import "src/components/Observer";
import "src/utils/grid/_index.scss";
import "./index.scss";


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }