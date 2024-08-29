import { $ } from '@wdio/globals'


class HomePage extends page{
    get cartIcon(){
        return $("#shopping_cart_cointainer")
    }
    get addToCartBtn(){
        return $("#add-to-cart-sauce-labs-backpack")
    }
    get productImage(){
        return $("#item_4_img_link")
    }
    
    open () {
    return super.open("inventory.html");
    }
}


export default new HomePage();
