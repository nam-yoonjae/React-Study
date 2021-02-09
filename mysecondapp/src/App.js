import './App.css';

function App() {

  let data = 'tddrue';
  const name = '리액트';

  return (
    <>    
      { data === 'true' ? 
      (<h1>true입니다.</h1>)
      :
      (<h1>true가 아니당</h1>)}

      { name === '리액트' && <h1>리액트입니다.</h1>  }
    </>
  );
}

export default App;
