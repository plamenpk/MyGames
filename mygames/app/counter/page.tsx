'use client';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectValue, incrementByAmount } from '@/slices/counterSlice';
import { useState } from 'react';

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector(selectValue);
  const dispatch = useDispatch();
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
    dispatch(incrementByAmount(Number(e.target.value)))
  };
  
  return (
    <div>
      <div className='flex justify-center items-center'>
        <button onClick={() => dispatch(increment())} className='w-full h-10 bg-green-400'>Increment</button>
        <h1> Counter={count}</h1>
        <button onClick={() => dispatch(decrement())} className='w-full h-10 bg-red-400'>Decrement</button>
      </div>
        <input className='w-full h-10 bg-yellow-400' type='text' onChange={e => setAmount(Number(e.target.value))}></input>
      <button onClick={() => dispatch(incrementByAmount(amount))} className='w-full h-10 bg-blue-300'>
        increment by{amount}
      </button>
      <input
          type='number'
          value={amount}
          onChange={handleInputChange}
          className='w-full h-10 bg-green-300'
        />
    </div>
  )
}

export default Counter;
