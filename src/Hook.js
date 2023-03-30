import * as React from 'react'
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useMemo
} from 'react'

export default function Hook() {

  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current ++;
    return () => {
      console.log('useEffect destory function')
    }
  }, [count])

  const increase = useCallback(function () {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(pre => pre + 1)
    setCount(pre => pre + 4);
    setCount2(pre => pre + 2);
    setCount2(pre => pre + 3);
  }, [])

  const memoValue = useMemo(() => {
    return count;
  }, [count])

  useLayoutEffect(() => {
    const dom = document.getElementById('test')
    // console.log('useLayoutEffect create', dom)
    return () => {
      console.log('useLayoutEffect destoryed')
    }
  })

  return (
    <div id="test">
      <span>{memoValue} : {count2}</span>
      <button onClick={increase}>increase</button>
    </div>
  )
}
