let [second, minute, hour] = [0, 0, 0];
let timer = null;


const hourEl   = document.getElementById('hour-display');
const minuteEl = document.getElementById('minute-display');
const secondEl = document.getElementById('second-display');
const msEl     = document.getElementById('ms-display');
const statusEl = document.getElementById('status-label');
const lapCountEl = document.getElementById('lap-count');


let ms = 0;
let msTimer = null;


const progressFill = document.getElementById('progress-fill');


let laps = [];
let lapStartSecond = 0; 


function stopwatch() {
    second++;
    if (second == 60) {
        second = 0;
        minute++;
        if (minute == 60) {
            minute = 0;
            hour++;
        }
    }

   
    hourEl.textContent   = String(hour).padStart(2, '0');
    minuteEl.textContent = String(minute).padStart(2, '0');
    secondEl.textContent = String(second).padStart(2, '0');


    progressFill.style.width = (second / 60 * 100) + '%';

  
    blinkColons();
}


function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);

   
    startMs();
    document.body.classList.add('running');
    statusEl.textContent = 'RUNNING';
}


function watchStop() {
    clearInterval(timer);
    timer = null;

 
    stopMs();
    document.body.classList.remove('running');
    statusEl.textContent = 'PAUSED';
}


function watchReset() {
    clearInterval(timer);
    timer = null;
    [second, minute, hour] = [0, 0, 0];

    hourEl.textContent   = '00';
    minuteEl.textContent = '00';
    secondEl.textContent = '00';


    stopMs(); ms = 0; msEl.textContent = '00';
    progressFill.style.width = '0%';
    document.body.classList.remove('running');
    statusEl.textContent = 'IDLE';
    laps = []; lapStartSecond = 0;
    lapCountEl.textContent = '00';
    document.getElementById('lap-list').innerHTML = '';
    document.getElementById('lap-section').classList.remove('visible');
}


function startMs() {
    stopMs();
    msTimer = setInterval(() => {
        ms = (ms + 3) % 100;
        msEl.textContent = String(ms).padStart(2, '0');
    }, 30);
}

function stopMs() {
    if (msTimer) { clearInterval(msTimer); msTimer = null; }
}


let blinkState = true;
function blinkColons() {
    blinkState = !blinkState;
    document.getElementById('c1').classList.toggle('blink', blinkState);
    document.getElementById('c2').classList.toggle('blink', blinkState);
}


function recordLap() {
    if (timer === null) return; 

    const totalSeconds = hour * 3600 + minute * 60 + second;
    const splitSeconds = totalSeconds - lapStartSecond;
    lapStartSecond = totalSeconds;

    const lapNum = laps.length + 1;
    laps.push({ num: lapNum, split: splitSeconds, total: totalSeconds });

    lapCountEl.textContent = String(lapNum).padStart(2, '0');
    renderLaps();

    const section = document.getElementById('lap-section');
    section.classList.add('visible');
}

function formatTime(s) {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    if (h > 0) return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
    return `${String(m).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;
}

function renderLaps() {
    const list = document.getElementById('lap-list');
    if (laps.length === 0) { list.innerHTML = ''; return; }

    const splits = laps.map(l => l.split);
    const best  = Math.min(...splits);
    const worst = Math.max(...splits);

    list.innerHTML = [...laps].reverse().map(lap => {
        let cls = '';
        if (laps.length > 1) {
            if (lap.split === best)  cls = 'best';
            if (lap.split === worst) cls = 'worst';
        }
        return `
        <div class="lap-item ${cls}">
            <span class="lap-num">L${String(lap.num).padStart(2,'0')}</span>
            <span class="lap-split">${formatTime(lap.split)}</span>
            <span class="lap-total">${formatTime(lap.total)}</span>
        </div>`;
    }).join('');
}


(function drawTicks() {
    const ring = document.getElementById('tick-ring');
    const total = 60;
    const r = 130;
    let html = '';
    for (let i = 0; i < total; i++) {
        const angle = (i / total) * 360;
        const isMajor = i % 5 === 0;
        const len = isMajor ? 10 : 5;
        const rad = (angle - 90) * Math.PI / 180;
        const x1 = 145 + r * Math.cos(rad);
        const y1 = 145 + r * Math.sin(rad);
        const x2 = 145 + (r - len) * Math.cos(rad);
        const y2 = 145 + (r - len) * Math.sin(rad);
        const color = isMajor ? 'rgba(0,212,255,0.5)' : 'rgba(30,45,61,0.8)';
        const w = isMajor ? 1.5 : 1;
        html += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${color}" stroke-width="${w}"/>`;
    }
    ring.innerHTML = `<svg viewBox="0 0 290 290" width="100%" height="100%" style="position:absolute;inset:0">${html}</svg>`;
})();
