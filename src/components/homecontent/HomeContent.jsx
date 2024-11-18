import { BottomCards } from '../bottomcards/BottomCards';
import { ShopByBrands } from '../brands/shopbybrands';
import { HandPickedCollections } from '../handpickedcollections/HandPicked';
import './homecontent.css';
export const HomeContent = () => {
    return (
       <>
       <HandPickedCollections/>
       <ShopByBrands/>
       <BottomCards/>
       </>

    )
}