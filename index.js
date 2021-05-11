const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
  timer: document.getElementById("timer-1"),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
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

    changeTimer({ days, hours, mins, secs });
  }

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

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("June 28, 2021"),
});

function changeTimer({days, hours, mins, secs}) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
};