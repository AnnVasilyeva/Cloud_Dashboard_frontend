import ApiService from './apiService';
import Instance from './instance';

const createBtn = document.querySelector('.btn_instance_create');

createBtn.onclick = () => {
  const instance = new Instance();
  const apiService = new ApiService(instance);

  if (apiService.ws.readyState === 1) {
    apiService.create();
  } else {
    setTimeout(() => {
      apiService.create();
    }, 1000);
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  const instances = await fetch('https://cloud-dashboard-heroku.herokuapp.com/');
  instances.json().then((data) => {
    const instance = new Instance();
    instance.showInstances(data);
  });
});
