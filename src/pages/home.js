import Hero from '../components/hero'
import Carousel from '../components/carousel'

export default function Home() {
  const title = "THE 10 BEST JDM CARS"
  const description = "Here are 10 cars which we believe are set to appreciate in value in the coming years, making them excellent investments which you can not only watch appreciating in value but more importantly enjoy owning."
  return (
    <>
      <Hero title={title} description={description}/>
      <Carousel/>
    </>
  )
}
