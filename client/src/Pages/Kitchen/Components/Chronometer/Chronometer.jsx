import React, { Component } from 'react';
import moment, { duration } from 'moment';
import styles from './chronometer.module.css'
export default class Chronometer extends Component {
    state = {
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
    }

    addZeros(value) {
        value = String(value);
        while (value.length < 2) {
            value = `0${value}`
        }
        return value;
    }


    setChronometer() {
        const futureDate = moment(this.props.futureDate);

        const today = moment();

        const clockDuration = duration(futureDate.diff(today));

        const days = Math.floor(clockDuration.asDays());
        const hours = clockDuration.hours();
        const mins = clockDuration.minutes();
        const secs = clockDuration.seconds();

        this.setState({
            days,
            hours,
            mins,
            secs,
        });
    }

    componentDidMount() {
        this.setChronometer();
        this.interval = setInterval(() => {
            this.setChronometer();
        }, 1000);
    }

    componentWillUnmount() {
    clearInterval(this.interval);
}

    render() {
        return (
            <div className={styles.chronometer}>
                {Object.keys(this.state).map((key, i) => (
                    <div className={styles.chronometerSegment}>
                        <span className={`${styles.chronometerSegmentNumber} ${this.addZeros(this.state[key]) < 0 ? styles.chronometerSegmentNumberAlert:null}`}>
                            {/* {this.addZeros(this.state[key]) > 0 ? this.addZeros(this.state[key]) : null} */}
                            {this.addZeros(this.state[key])}
                        </span>
                        <span className={styles.chronometerSegmentCaption}>
                            {key[0].toUpperCase() + key.slice(1)}
                        </span>
                    </div>
                ))}
            </div>
        )
    }
}

