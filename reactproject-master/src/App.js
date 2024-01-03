import "./App.css";
import Gotaxi from "./comp/Gotaxi";
import Salemcafe from "./comp/Salemcafe";
import Housing from "./comp/Housing";
import Electricbill from "./comp/Electricbill";
import xyz from "./comp/xyz";
function App() {
  return (
    <>
      <Electricbill />
      <br />
      <Housing />
      <br />
      <Salemcafe />
      <br />
      <Gotaxi />

      <xyz/>
    </>
  );
}
export default App;
