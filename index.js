class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.days = document.querySelector(`${selector} .value[data-value="days"]`);
    this.hours = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.mins = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.secs = document.querySelector(`${selector} .value[data-value="secs"]`);
    this.timer = document.getElementById("timer-1");
  }

  setInt = setInterval(() => {
    const currentTime = Date.now();
    const time = this.targetDate - currentTime;
    this.webTimer(time);
    this.timeFinish(time);
  }, 1000);

  webTimer(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.changeTimer({ days, hours, mins, secs });
  }

  changeTimer({days, hours, mins, secs}) {
    this.days.textContent = `${days}`;
    this.hours.textContent = `${hours}`;
    this.mins.textContent = `${mins}`;
    this.secs.textContent = `${secs}`;
  };

  pad(value) {
    return String(value).padStart(2, "0");
  }

  timeFinish(time) {
    if (time < 0) {
      clearInterval(this.setInt);
      refs.timer.textContent = "Finish";
    }
  }
};

//firstTimer
const timer1 = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("June 28, 2021"),
});

