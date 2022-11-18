import { useEffect, useState } from "react";
import styles from "./Timer.module.scss"

function Timer() {

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("11/18/2022 23:59:59")
        const interval = setInterval(() =>{
        const current = new Date()
        const dif = target.getTime() - current.getTime()
        const h = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        setHours(h)
        const m = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60))
        setMinutes(m)
        const s = Math.floor((dif % (1000 * 60)) / 1000)
        setSeconds(s)
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        <div className={styles.timer__container}>
            <div className={styles.timer__content}>
                <div className={styles.timer__part}>
                    <span className={styles.timer__time}>{hours}</span>
                    <span className={styles.timer__label}>Hours</span>
                </div>
                <div className={styles.timer__part}>
                    <span className={styles.timer__time}>{minutes}</span>
                    <span className={styles.timer__label}>Minutes</span>
                </div>
                <div className={styles.timer__part}>
                    <span className={styles.timer__time}>{seconds}</span>
                    <span className={styles.timer__label}>Seconds</span>
                </div>
            </div>
        </div>
    )
}

export default Timer;