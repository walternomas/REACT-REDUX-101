import react from 'react';
import { increment, decrement } from '../redux/actions';
import { connect } from 'react-redux';

function Buttons({ increment, decrement }) {
  return (
    <div>
      <button onClick={() => decrement()} style={{marginRight:'10px'}}> - Decrementar </button>
      <button onClick={() => increment()} style={{marginLeft:'10px'}}> + Incrementar </button>
    </div>
  );
}

export default connect(null, { increment, decrement })(Buttons);
