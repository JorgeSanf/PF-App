data = ["juan", "pedro", "juanito"]  

const linkTemas = data.map((item) => {
    return { label: { item }, link: `/tema/${item}` };
});
  
console.log(linkTemas)