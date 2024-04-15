function showContent(tabId) {
    var tabs = document.querySelectorAll('.event-card-tab');
    tabs.forEach(function (tab) {
        tab.classList.remove('active');
    });
    var contents = document.querySelectorAll('.event-card-content');
    contents.forEach(function (content) {
        content.classList.remove('active');
    });
    document.getElementById(tabId + '-tab').classList.add('active');
    document.getElementById(tabId).classList.add('active');
}