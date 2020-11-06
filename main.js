function callback(entries, observer) {
    // entries.forEach(entry => console.log(entry.target, entry.intersectionRatio))
    entries.forEach(entry => checkDisplay(entry))
}
const options = {
    threshold: .9,
    // threshold: 0.7,
    // root: document.querySelectorAll('.container')[0],
};


window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    const observer = new IntersectionObserver(callback, options);
    const sections = document.querySelectorAll(".container section")
    sections.forEach(section => observer.observe(section));

});


function checkDisplay(entry) {
    const id = entry.target.id
    if (!entry.isIntersecting) {
        return
    }
    console.log(id, entry.isIntersecting)

    //link from intersecting section
    const navLink = document.querySelector(`[data-section='${id}']`)

    const allLinks = document.querySelectorAll('[data-section]')

    allLinks.forEach( li => li.classList.remove("active") )
    
    navLink.classList.add("active")
    console.log(`checkDisplay -> navLink`, navLink)


    // if(entry === entry[welcome]){

    // }
}

//document.querySelectorAll("[data-foo='1']")            