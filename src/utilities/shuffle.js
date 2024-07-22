

const shuffle = () => {

  const images = [
    {image: ('/images/Cards/1.jpg')},
    {image: '/images/Cards/2.jpg'},
    {image: '/images/Cards/3.jpg'},
    {image: '/images/Cards/4.jpg'},
    {image: '/images/Cards/5.jpg'},
    {image: '/images/Cards/6.jpg'},
    {image: '/images/Cards/7.jpg'},
    {image: '/images/Cards/8.jpg'},
  ]

  return [...images, ...images]
  .sort(() => Math.random() - 0.5)
  .map((card, index) => ({...card, id: Math.random()}))
}

export default shuffle