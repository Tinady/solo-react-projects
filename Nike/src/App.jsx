import React from 'react'
import { Hero,
  Footer,
  CustomerReview,
  PopularProducts,
  Services,
  SuperQuality,
  SpecialOffers,
  Subscribe,
  Nav} from '../src/components/index'

const App = () => {
  return (
   <main className='relative'>
     <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
   <Hero/>
      </section>

      <section className='padding '>
      <PopularProducts/>
      </section>

      <section className='padding '>
     <SuperQuality/>
      </section>

      <section className='padding-x py-10 '>
     <Services/>
      </section>

      <section className='padding '>
       <SpecialOffers/>
      </section>

      
      <section className='padding bg-pale-blue '>
     <CustomerReview/>
      </section>
      
      <section className='padding-x  sm:py-32 py-16 w-full'>
       <Subscribe/>
      </section>

      
      <section className='padding-x padding-t bg-black pb-8'>
        <Footer/>
      </section>



   </main>
  )
}

export default App
