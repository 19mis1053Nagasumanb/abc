const testimonials = [
    {
        name: "sam",
        job: "frontend",
        image: "img1.jpg",
        testimonial:
            "cgvbjfgcvbhuyfcvfcghvhgfcfhvfgchvhgcbvgch bgcbvhgvcvgghchgcghgfgfxgf",


    },
    {
        name: "jam",
        job: "frontend",
        image: "img2.jpg",
        testimonial:
            "cgvbjfgcvbhuyfcvfcghvhgfcfhvfgchvhgcbvgch bgcbvhgvcvgghchgcghgfgfxgf",

    },
    {
        name: "gy",
        job: "frontend",
        image: "img3.jpg",
        testimonial:
            "cgvbjfgcvbhuyfcvfcghvhgfcfhvfgchvhgcbvgch bgcbvhgvcvgghchgcghgfgfxgf",

    },
    

];



let i=0;
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let displayTestimonial = () => {

    testimonialContainer.innerHTML = `
        <p>${testimonials[i].testimonial}</p>
        <img src=${testimonials[i].image}>
        <h3>${testimonials[i].name}</h3>
        <h6>${testimonials[i].job}</h6>
        `;
};
window.onload = displayTestimonial;
    
