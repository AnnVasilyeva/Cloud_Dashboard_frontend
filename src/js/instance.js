import ApiService from './apiService';

export default class Instance {
  constructor() {
    this.service = new ApiService(this);
    this.container = document.querySelector('.instances_list');
  }

  showInstances(instances) {
    this.container.innerHTML = '';

    instances.forEach((instance) => {
      const item = document.createElement('li');
      item.classList.add('instances_item');

      item.innerHTML = `<div class="instances_item_id">${instance.id}</div>
                <div class="instances_item_status">
                    <span class="item_status">Status:</span>
                    <div class="item_status_icon ${instance.state === 'running' ? 'running' : ''}">
                        <i class="fas fa-circle fa-sm"></i>
                    </div>
                    <span class="status_text">${instance.state}</span>
                </div>
                <div class="instances_item_actions">
                    <span class="item_actions">Actions:</span>
                    <div class="item_actions_icon">
                        <div class="actions_icon update ${instance.state === 'stopped' ? 'play' : 'pause'}">
                        ${instance.state === 'stopped' ? '<i class="fas fa-play fa_lg"></i>' : '<i class="fas fa-pause fa-sm"></i>'}
                        </div>
                        <div class="actions_icon delete">
                            <i class="fas fa-times fa-lg"></i>
                        </div>
                    </div>
                </div>`;

      this.container.appendChild(item);

      this.deleteInstance(item, instance);

      this.updateInstance(item, instance);
    });
  }

  deleteInstance(elem, instance) {
    const deleteBtn = elem.querySelector('.delete');
    deleteBtn.onclick = () => {
      this.service.delete(instance.id);
    };
  }

  updateInstance(elem, instance) {
    const action = elem.querySelector('.update');
    action.onclick = () => {
      if (action.classList.contains('play')) {
        this.service.start(instance.id);
      } else if (action.classList.contains('pause')) {
        this.service.stop(instance.id);
      }
    };
  }
}
