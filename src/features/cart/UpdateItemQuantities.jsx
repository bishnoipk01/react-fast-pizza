import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuanity } from './cartSlice';

function UpdateItemQuantities({ pizzaId, pizzaQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type={'round'}
        onClick={() => dispatch(decreaseItemQuantity({ pizzaId }))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{pizzaQuantity}</span>
      <Button
        type={'round'}
        onClick={() => dispatch(increaseItemQuanity({ pizzaId }))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantities;
