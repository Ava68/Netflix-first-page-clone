const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//Select tab content item
// parameter for this function is e(eventlistener)

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}



//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));


function selectItem(e) {
    //removing already existed boreder
    removeBorder()
    removeShow();
    //Add border to current tab
    this.classList.add('tab-border');
    //grab content item from the dom by this.id
    const tabContentItem = document.getElementById(this.id + "-content");
    console.log(tabContentItem);
    //Add show class
    tabContentItem.classList.add('show');

}




