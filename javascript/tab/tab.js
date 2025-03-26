let tabs = document.getElementById("tabs");
let tabContents = document.getElementById("tab-contents");

let tabList = [
  {
    id: "tab-1",
    title: "Tab 1",
    content: "Content 1",
  },
  {
    id: "tab-2",
    title: "Tab 2",
    content: "Content 2",
  },
  {
    id: "tab-3",
    title: "Tab 3",
    content: "Content 3",
  },
];


function renderTabs(activeTabNum = "tab-1") {
    tabs.innerHTML = "";
    tabContents.innerHTML = "";
    tabList.forEach(({ id, title, content }) => {
        let tab = document.createElement("button");
        tab.innerText = title;
        tab.setAttribute("id", id);
        tab.addEventListener("click", () => {
            let activeTab = document.getElementById(activeTabNum);
            let activeContent = document.getElementById(`content-${activeTabNum}`);
            activeTab.style.backgroundColor = "white";
            activeContent.style.display = "none";
            activeTabNum = id;
            tab.style.backgroundColor = "lightgray";
            let contentDiv = document.getElementById(`content-${id}`);
            contentDiv.style.display = "block";
        });
        tabs.appendChild(tab);

            
        let contentDiv= document.createElement("div");
        contentDiv.innerText = content;
        contentDiv.setAttribute("id", `content-${id}`);
        contentDiv.style.display = "none";
        if (activeTabNum === id) {
            contentDiv.style.display = "block";
        }
        
        tabContents.appendChild(contentDiv);
    
    })

}
renderTabs();
