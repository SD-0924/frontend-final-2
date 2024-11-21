
import { BottomCards } from '../bottomcards/BottomCards';
import { ShopByBrands } from '../brands/shopbybrands';
import { HandPickedCollections } from '../handpickedcollections/HandPicked';
export const HomeContent = () => {
    return (
       <>
       <HandPickedCollections/>
       <ShopByBrands/>
       <BottomCards/>
       </>

    )
}