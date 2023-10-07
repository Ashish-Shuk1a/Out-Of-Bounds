import { useState, useEffect } from 'react';
import getRemainingTime from '../../utils/countDownTimer'
import CounterAtom from "./CounterAtom";
const CounterContainer = ({ countDownLimit }) => {
    const defaultRemainingTime = {
        days: '01',
        hours: '10',
        minutes: '30',
        seconds: '05',
    }
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)
    const updateRemainingTime = (countdown) => {
        setRemainingTime(getRemainingTime(countdown))
    }
    useEffect(() => {
        const timer = setInterval(() => {
            updateRemainingTime(countDownLimit)
        }, 1000)

        return () => clearInterval(timer)
    }, [countDownLimit])
  return (
    <div className="flex bg-gradient-to-b from-blue-500 to-white justify-center grow mt-20 lg:mt-0 bg-blue-400 h-40">
      <div className="flex items-center gap-12 lg:gap-8 lg:flex-row 2xl:gap-24">
        <CounterAtom time="Days" timeleft={remainingTime.days}/>
        <CounterAtom time="Hrs" timeleft={remainingTime.hours}/>
        <CounterAtom time="Mins" timeleft={remainingTime.minutes}/>
        <CounterAtom time="Secs" isHidden={true} timeleft={remainingTime.seconds}/>
      </div>
    </div>
  );
};

export default CounterContainer;
