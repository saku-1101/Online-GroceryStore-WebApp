import { selectCount } from './counterSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import actions
import { decrement, increment } from './counterSlice';

export default function Counter() {
  // The `state` arg is correctly defined its type as `RootState` already
  // actionがdispatchされるとuseSelectorは以前のセレクタの結果値と現在の結果値の参照比較を行います。もし異なれば再レンダリングをし、同じであれば再レンダリングはされません。
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <>
      <p>{count}</p>
      {/* useAppdispatchでdispatchを撮ってきて，Sliceからのactionを渡せば，あとはreducerがやってくれる*/}
      {/* sliceの利用により，slice name + 使用reducer名のアクションがdispatchされる．ここではcounter_increment */}
      <button className="btn" onClick={() => dispatch(increment())}>
        +
      </button>
    </>
  );
}
