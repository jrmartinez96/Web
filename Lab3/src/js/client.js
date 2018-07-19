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
  actualTab: "all",
  lastID: 99999999,
  todoItems: [{"id": 1, "title": "hola", "isCompleted": true}, {"id": 2, "title": "amigos", "isCompleted": false},{"id": 3, "title": "hola", "isCompleted": true}, {"id": 4, "title": "amigos", "isCompleted": true}],
};

const render = lState => {
  // Clear previous root content
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  //#region Nav Bar tab
  const navBar = document.createElement('div');
  navBar.className = 'nav-bar';

  /* ALL TAB */
  const allTab = document.createElement('div');
  allTab.className = 'nav-item left';
  if(lState.actualTab == "all"){
    allTab.className = allTab.className + " selected"
  }

  allTab.onclick = () => {
    if(lState.actualTab != "all"){
      lState.actualTab = "all";
      render(lState);
    }
  };

  /* COMPLETED TAB */
  const completedTab = document.createElement('div');
  completedTab.className = 'nav-item middle';
  if(lState.actualTab == "completed"){
    completedTab.className = completedTab.className + " selected"
  }

  completedTab.onclick = () => {
    if(lState.actualTab != "completed"){
      lState.actualTab = "completed";
      render(lState);
    }
  };

  /* ACTIVE TAB */
  const activeTab = document.createElement('div');
  activeTab.className = 'nav-item right';
  if(lState.actualTab == "active"){
    activeTab.className = activeTab.className + " selected"
  }

  activeTab.onclick = () => {
    if(lState.actualTab != "active"){
      lState.actualTab = "active";
      render(lState);
    }
  };

  const navItemTitleAll = document.createElement('div');
  navItemTitleAll.className = "title";
  navItemTitleAll.innerHTML = "ALL";

  const navItemTitleCompleted = document.createElement('div');
  navItemTitleCompleted.className = "title";
  navItemTitleCompleted.innerHTML = "COMPLETED";

  const navItemTitleActive = document.createElement('div');
  navItemTitleActive.className = "title";
  navItemTitleActive.innerHTML = "ACTIVE";


  root.appendChild(navBar);
  navBar.appendChild(allTab);
  navBar.appendChild(completedTab);
  navBar.appendChild(activeTab);
  allTab.appendChild(navItemTitleAll);
  completedTab.appendChild(navItemTitleCompleted);
  activeTab.appendChild(navItemTitleActive);

  //#endregion

  //#region TODO List
  /* La caja qe contiene la lista dentro */
  const listBox = document.createElement('div');
  listBox.className = "list-box";

  /* La lista que contiene a sus items */
  const list = document.createElement('ul');
  list.className = "todo-list"

  if(lState.actualTab == "all"){ /* SI SE ENCUENTRA EN EL TAB DE ALL */
    /* Ciclo que agrega todos los items que se encuentran dentro de todoItems del state */
    lState.todoItems.forEach(item => {
      // Se crea un item, si tiene la propiedad de completed
      // se le agrega la clase de "completed" para pintarlo de verde
      const listItem = document.createElement('li');
      let isCompletedClassName = "";
      if(item["isCompleted"]){
        isCompletedClassName = "completed";
      }
      listItem.className = `list-item ${isCompletedClassName}`;
  
      listItem.onclick = () => {
        if(item["isCompleted"]){
          item["isCompleted"] = false;
        } else {
          item["isCompleted"] = true;
        }
        render(lState);
      };
  
      // Se crea un dive con clase title dentro del item para
      // que se pueda centrar el texto verticalmente
      const listItemTitle = document.createElement('div');
      listItemTitle.className = "title"
      listItemTitle.innerHTML = item["title"];
  
      list.appendChild(listItem);
      listItem.appendChild(listItemTitle);
    });
  } else if(lState.actualTab == "completed"){ /* SI SE ENCUENTRA EN EL TAB DE COMPLETED */

    // Se crea un array con los elementos que se encuentran completed
    let completedList = [];

    lState.todoItems.forEach(item => {
      if(item["isCompleted"]){
        completedList.push(item);
      }
    });

    /* Ciclo que agrega todos los items que se encuentran dentro del array completedItems */
    completedList.forEach(item => {
      // Se crea un item, si tiene la propiedad de completed
      // se le agrega la clase de "completed" para pintarlo de verde
      const listItem = document.createElement('li');
      let isCompletedClassName = "";
      if(item["isCompleted"]){
        isCompletedClassName = "completed";
      }
      listItem.className = `list-item ${isCompletedClassName}`;
  
      listItem.onclick = () => {
        let idToChange = item["id"];
        lState.todoItems.forEach(todoItem => {
          if(todoItem["id"] == idToChange){
            if(todoItem["isCompleted"]){
              todoItem["isCompleted"] = false;
            } else {
              todoItem["isCompleted"] = true;
            }
          }
        });

        render(lState);
      };
  
      // Se crea un dive con clase title dentro del item para
      // que se pueda centrar el texto verticalmente
      const listItemTitle = document.createElement('div');
      listItemTitle.className = "title"
      listItemTitle.innerHTML = item["title"];
  
      list.appendChild(listItem);
      listItem.appendChild(listItemTitle);
    });
  } else if(lState.actualTab == 'active'){ /* SI SE ENCUENTRA EN EL TAB DE ACTIVE */

    // Se crea un array con los elementos que se encuentran completed
    let activeList = [];

    lState.todoItems.forEach(item => {
      if(!item["isCompleted"]){
        activeList.push(item);
      }
    });

    /* Ciclo que agrega todos los items que se encuentran dentro del array activeList */
    activeList.forEach(item => {
      // Se crea un item, si tiene la propiedad de completed
      // se le agrega la clase de "completed" para pintarlo de verde
      const listItem = document.createElement('li');
      let isCompletedClassName = "";
      if(item["isCompleted"]){
        isCompletedClassName = "completed";
      }
      listItem.className = `list-item ${isCompletedClassName}`;
  
      listItem.onclick = () => {

        let idToChange = item["id"];
        lState.todoItems.forEach(todoItem => {
          if(todoItem["id"] == idToChange){
            if(todoItem["isCompleted"]){
              todoItem["isCompleted"] = false;
            } else {
              todoItem["isCompleted"] = true;
            }
          }
        });

        render(lState);
      };
  
      // Se crea un dive con clase title dentro del item para
      // que se pueda centrar el texto verticalmente
      const listItemTitle = document.createElement('div');
      listItemTitle.className = "title"
      listItemTitle.innerHTML = item["title"];
  
      list.appendChild(listItem);
      listItem.appendChild(listItemTitle);
    });
  }
  

  root.appendChild(listBox);
  listBox.appendChild(list);

  //#endregion TODO List

  //#region Input box
  const inputBottomBox = document.createElement('div');
  inputBottomBox.className = "input-bottom-box";

  const inputBox = document.createElement('div');
  inputBox.className = "input-box";

  const inputText = document.createElement('input');
  inputText.type = "text";
  inputText.className = "input-text";

  const buttonAdd = document.createElement('div');
  buttonAdd.className = "button-add";
  buttonAdd.innerHTML = "ADD"
  buttonAdd.onclick = () => {
    let newTodo = {"id": 0, "title": "", "isCompleted": false};
    newTodo["id"] = lState.lastID + 1;
    lState.lastID = newTodo["id"];
    newTodo["title"] = inputText.value;
    lState.todoItems.push(newTodo);
    render(lState);
  }

  root.appendChild(inputBottomBox);
  inputBottomBox.appendChild(inputBox);
  inputBox.appendChild(inputText);
  inputBox.appendChild(buttonAdd);

  //#endregion Input box
};

render(state);