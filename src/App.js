import { playDrums,banks,power,volume } from './Drums'
import { useSelector, useDispatch } from 'react-redux'

import './index.css'
import './materialize.css'
function App() {


  const drumPads = useSelector(state => state.counter.drumPads);
  const name = useSelector(state => state.counter.name);
  const truthy = useSelector(state => state.counter.truthy)

  const dispatch = useDispatch();
  const drumMap = drumPads.map((drums) => {
        return(<div className='drums' 
        onClick={() => dispatch(playDrums(drums.keyCode))}
        key={drums.keyCode}>{drums.keyTrigger}</div>)
  });
  const drumMapTrue = drumPads.map((drums) => {
    return(<div className='drums inactive' 
    key={drums.keyCode}>{drums.keyTrigger}</div>)
});
  function handleKeyDown (e) {
    dispatch(playDrums(e.keyCode))
}
  document.addEventListener('keydown', handleKeyDown);





  return (
    <div className="App">
      {truthy ? <div className='drums-cta'>
     {drumMap}
    
    </div> : <div className='drums-cta'>
      {drumMapTrue}
      </div>}
    <div className='cont'>
    <div className="switch whit">
    <label>
      <span className='one'>Bank One</span>
      <input className='box' onChange={(e)=> dispatch(banks(e.target.checked))} type="checkbox" />
      <span className="lever"></span>
      <span className='two'>Bank Two</span>
    </label>
  </div>
    <div className='tracks'>{name}</div>
    <form action="#">
    <p className="range-field">
      <input onClick={(e)=>dispatch(volume(e.target.value))} type="range" min="0" max="100" />
    </p>
  </form>
    <div className="switch">
    <label className='power'>
      Power Off
      <input className='box' onChange={(e)=> dispatch(power(e.target.checked))} type="checkbox" />
      <span className="lever"></span>
      Power On
    </label>
  </div> 
    </div>
    </div>
  );
}

export default App;
