import { FaArrowDown, FaArrowUp } from "react-icons/fa"


interface TimerSetterProps{
 time: number
 setTime: (time: number) => void
 min: number
 max: number
 interval: number
 type: "break" | "session"

}

const TimeSetter: React.FC<TimerSetterProps> = ({ time, setTime, min, max, interval, type})=>{
return (
    <div>
        <button id={`${type}-decrement`} onClick={()=>(time > min ? setTime(time - interval) : null )}><FaArrowDown/></button>
        <span id={`${type}-length`}>{time / interval}</span>
        <button id={`${type}-increment`} onClick={()=>(time < max ? setTime(time + interval) : null )}><FaArrowUp/></button>
    </div>
)}




export default TimeSetter