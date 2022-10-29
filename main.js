const addBtn =
    document.getElementsByClassName("add-btn");

addBtn[0].addEventListener("click", () => {
    addListBtn();
    delListBtn();
});

const addListBtn = () => {
    const addText =
        document.getElementById("add-area");
    const listText = document.createTextNode(
        addText.value
    );
    const addLi = document.createElement("li");
    addLi.classList.add("addList");
    addLi.appendChild(listText);

    const finishBtn =
        document.createElement("button");
    finishBtn.classList.add("finishBtn");
    finishBtn.innerHTML = "完了";
    addLi.appendChild(finishBtn);

    const lists = document.getElementById("todo");
    lists.appendChild(addLi);
};

const delListBtn = () => {
    const finishBtn =
        document.getElementsByClassName(
            "finishBtn"
        );
    // const addList =
    //     document.getElementsByClassName(
    //         "addList"
    //     );
    for (let n = 0; n < finishBtn.length; n++) {
        finishBtn[n].addEventListener(
            "click",
            () => {
                // addList[n].remove();
                // finishBtn[n].remove();
                const oneList =
                    finishBtn[n].parentNode;
                oneList.remove();
            }
        );
    }
};
