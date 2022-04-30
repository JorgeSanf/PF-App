export async function imageExists(image_url: string) {
  let response = await fetch(image_url); //new XMLHttpRequest();
  console.log(response.ok);
  return response.ok;
}

export async function asignarSrc(tema: string) {
  let imgSrc = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tema.toLowerCase()}/${tema.toLowerCase()}-original.svg`;
  if (!(await imageExists(imgSrc))) {
    imgSrc = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tema.toLowerCase()}/${tema.toLowerCase()}-plain.svg`;
  }
  return imgSrc;
}

export interface cImgProps {
  imageSrc: string;
  good: any;
  bad: any;
}

export function checkImage({ imageSrc, good, bad }: cImgProps) {
  var img = new Image();
  img.onload = good;
  img.onerror = bad;
  img.src = imageSrc;
}
/*
    let imgSource = "";
    const good = () => {
      imgSource = imgSrc;
    };
    const bad = (tema: string) => {
      imgSource = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tema.toLowerCase()}/${tema.toLowerCase()}-plain.svg`;
    };
    checkImage({ imageSrc: imgSrc, good, bad });
    */
