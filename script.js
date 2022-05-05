function onButtonClick(page) {
    console.log('qwer')
    let home_page = document.getElementById('home_page');
    const search = document.getElementById('search_page');
    const library = document.getElementById('library_page');
    
    const notActive = "not-active";
    
    home_page.classList.add(notActive);
    search.classList.add(notActive);
    library.classList.add(notActive);
    
    switch(page) {
        case "home":
            home_page.classList.remove(notActive);
            console.log('ghjk');
            break;
            
        case "search":
            search.classList.remove(notActive);
            break;
        case "library":
            library.classList.remove(notActive);
            break;
            
    }
}