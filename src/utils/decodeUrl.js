export const decodeUrl = (url) => {
    const decodeURIComponent = atob(url)
    if (decodeURIComponent){
        var jsonObj = JSON.parse(decodeURIComponent);
        return {links: jsonObj }
    }
    return {links: []}
}