import React from 'react'
import Navbar from '../components/Navbar'
import BrandFilter from '../components/filters/BrandFilter'
import RamFilter from '../components/filters/Ramfilter'
import PriceRangeFilter from '../components/filters/PriceRangeFilter'
import ProductsSection from '../components/ProductsSection'
import SortByDropdown from '../components/filters/SortByDropdown'
import StorageFilter from '../components/filters/StorageFilter'

const Filters = () => {

    //todo debauncing 
  return (
    <div>
        <Navbar />

        <div className='grid grid-cols-6 gap-6 px-10 mt-10'>
            <div className='col-span-1 h-full bg-slate-100'>
                <PriceRangeFilter />
                <BrandFilter />
                <RamFilter />
                <StorageFilter/>
            </div>
            <div className='col-span-5 h-full p-6'>
                <SortByDropdown />
                <ProductsSection />
            </div>
        </div>
    </div>
  )
}

export default Filters