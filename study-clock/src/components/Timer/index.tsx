import { useEffect, useState } from 'react';
import Button from "../Button";
import Watch from "./Watch";
import style from "./Timer.module.scss";
import { ITask } from "../../types/task";
import { timeToSeconds } from '../../common/utils/time';

interface Props {
    selected: ITask | undefined,
    killTask: () => void
}

export default function Timer({ selected, killTask }: Props){

    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time){
            setTime(timeToSeconds(selected.time))
        }
    }, [selected]);

    function regressive(counter:number = 0){
        setTimeout(()=>{
            if(counter > 0){
                setTime(counter-1);
                return regressive(counter-1);
            }
            killTask();
        }, 1000);
    }

    return(
        <div className={style.timer}>
            <p className={style.title}>Choose a card and start the timer</p>
            <div className={style.watchWrapper}>
                <Watch time={time} />
            </div>
            <Button onClick={() => regressive(time)}>
                Start!
            </Button>
        </div>
    )
}