import './App.css';
import Productlist from './components/Productlist';

function App() {

  return (
    <div className="App">
      <Productlist products={[{no:"1",name:"Phone", price:"21,000", imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtfvixHNggkQaTFV_sO9e-9W6xTymPf3mtw&usqp=CAU"},{no:"2",name:"Car", price:"70,00,000", imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7AuRUR3-TWmOLW0tMVfPyV1UPjKrugt4qGQ&usqp=CAU"}]}/>
    </div>
  );
}


export default App;