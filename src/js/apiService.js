import WorkLog from './workLog';

export default class ApiService {
  constructor(instance) {
    this.instance = instance;
    // this.ws = new WebSocket('ws://127.0.0.1:7070/ws');
    this.ws = new WebSocket('wss://cloud-dashboard-heroku.herokuapp.com/ws');

    this.ws.onopen = () => {
      console.log('connected');
    };

    this.ws.onmessage = (evt) => {
      const response = JSON.parse(evt.data);

      if (response.type === 'received') {
        WorkLog.createLog(response.data);
      } else {
        WorkLog.createLog(response.data);

        this.instance.showInstances(response.data.instances);
      }
    };

    this.ws.onclose = (evt) => {
      console.log('connection closed', evt);
    };

    this.ws.onerror = () => {
      console.log('error');
    };
  }

  create() {
    this.ws.send(
      JSON.stringify({
        type: 'create',
      }),
    );
  }

  start(id) {
    this.ws.send(
      JSON.stringify({
        type: 'start',
        data: {
          id,
        },
      }),
    );
  }

  stop(id) {
    this.ws.send(
      JSON.stringify({
        type: 'stop',
        data: {
          id,
        },
      }),
    );
  }

  delete(id) {
    this.ws.send(
      JSON.stringify({
        type: 'delete',
        data: {
          id,
        },
      }),
    );
  }
}
