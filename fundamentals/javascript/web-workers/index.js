const nbaWorker = new Worker('./workers/WorkerNBA.js');
const championsWorker = new Worker('./workers/WorkerChampions.js');

nbaWorker.postMessage('Cleveland is playing');
championsWorker.postMessage('Vini scored a goal');

nbaWorker.onmessage = ({ data }) => {
  console.log(data);
};

championsWorker.onmessage = ({ data }) => {
  console.log(data);
}