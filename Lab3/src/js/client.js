/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #2
    client.js
==========================================
*/

const state = {

};

const render = lState => {
  // Clear previous root content
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  const navBar = document.createElement('div');
  navBar.className = 'nav-bar';

  const allTab = document.createElement('div');
  allTab.className = 'nav-item left';
  allTab.innerHTML = "All";

  const completedTab = document.createElement('div');
  completedTab.className = 'nav-item middle';
  completedTab.innerHTML = "Completed";

  const activeTab = document.createElement('div');
  activeTab.className = 'nav-item right';
  activeTab.innerHTML = "Active";

  root.appendChild(navBar);
  navBar.appendChild(allTab);
  navBar.appendChild(completedTab);
  navBar.appendChild(activeTab);
};

render(state);