function callback(entries, observer) {
    entries.forEach(entry => console.log(entry.target, entry.intersectionRatio))
}
const options = {
    threshold: .9,
    // threshold: 0.7,
    // root: document.querySelectorAll('.container')[0],
};
const observer = new IntersectionObserver(callback, options);


const sections = document.querySelectorAll(".container section")
sections.forEach(section => observer.observe(section));
