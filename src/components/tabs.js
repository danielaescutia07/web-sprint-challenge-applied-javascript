import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
 const topicsDiv = document.createElement('div');
 const tabJavascript = document.createElement('div');
 const tabBootstrap = document.createElement('div');
 const tabTech = document.createElement('div');
 const tabJquery = document.createElement('div');
 const tabNode = document.createElement('div');

 topicsDiv.classList.add('topics');
 tabJavascript.classList.add('tab');
 tabBootstrap.classList.add('tab');
 tabTech.classList.add('tab');
 tabJquery.classList.add('tab');
 tabNode.classList.add('tab');

 tabJavascript.textContent = `${topics[0]}`;
 tabBootstrap.textContent = `${topics[1]}`;
 tabTech.textContent = `${topics[2]}`;
 tabJquery.textContent = `${topics[3]}`;
 tabNode.textContent = `${topics[4]}`;

 topicsDiv.appendChild(tabJavascript);
 topicsDiv.appendChild(tabBootstrap);
 topicsDiv.appendChild(tabTech);
 topicsDiv.appendChild(tabJquery);
 topicsDiv.appendChild(tabNode);

 return topicsDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  axios.get('http://localhost:5000/api/topics')
    .then(resp => {
      const newTabs = Tabs(resp.data.topics);
      console.log(newTabs);
      document.querySelector(selector).appendChild(newTabs);
    })
    .catch(err => {
      console.error(err);
    })
}

export { Tabs, tabsAppender }
