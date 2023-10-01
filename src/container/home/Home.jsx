import Hero from '../../components/Hero'
import Navbar from '../../components/navbar/navbar'
const Home = () => {
  return (
    <div className='flex flex-col'>
   <header className='relative mb-20'> <Navbar/></header>
     <section className='relative'><Hero/></section>
    </div>
  )
}

export default Home