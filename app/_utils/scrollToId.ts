"use client"
export const scrollToId = (id: string) => {
    const yOffset = -10; 
    const element = document.getElementById(id);
    if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
}
