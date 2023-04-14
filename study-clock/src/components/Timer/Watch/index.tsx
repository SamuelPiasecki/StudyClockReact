import style from "./Watch.module.scss";

interface Props {
    time: number | undefined
}

export default function Watch({ time = 0 }: Props) {

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    const [minuteDozen, minuteUnit] = String(minutes).padStart(2, '0');
    const [secondDozen, secondUnit] = String(seconds).padStart(2, '0');

    return(
        <>
            <span className={style.watchNumber}>{minuteDozen}</span>
            <span className={style.watchNumber}>{minuteUnit}</span>
            <span className={style.watchDivision}>:</span>
            <span className={style.watchNumber}>{secondDozen}</span>
            <span className={style.watchNumber}>{secondUnit}</span>
        </>
    )
}