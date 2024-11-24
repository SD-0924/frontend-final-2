
import { BottomCards } from '../bottomcards/BottomCards';
import { ShopByBrands } from '../brands/shopbybrands';
import { HandPickedCollections } from '../handpickedcollections/HandPicked';
import HeroBanner from '../HeroBanner/HeroBanner';
import NewArrivals from '../NewArrivals/NewArrivals';
export const HomeContent = () => {
    return (
       <>
       <HeroBanner/>
       <NewArrivals/>
       <HandPickedCollections/>
       <ShopByBrands/>
       <BottomCards/>
       </>

    )
}