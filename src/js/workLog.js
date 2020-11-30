export default class WorkLog {
  static createLog(data) {
    const container = document.querySelector('.worklog_list');
    const log = document.createElement('li');
    log.classList.add('worklog_item');
    log.innerHTML = ` <div class="worklog_item_date">${data.date}</div>
                <div class="worklog_item_server">
                    <span class="item_server">Server:</span>
                    <span class="item_server_id">${data.id}</span>
                </div>
                <div class="worklog_item_info">
                    <span class="item_info">Info:</span>
                    <span class="item_info_status">${data.info}</span>
                </div>`;

    container.appendChild(log);
  }
}
