let shoppingCart :string[]=[];

function addItem(item:string):void{
    shoppingCart.push(item);
    console.log(`this item is added to the shopping cart${item}`);
    printCart();
}

function removeitem(item:string):void{
    const index = shoppingCart.indexOf(item);
    if(index!==-1){
        shoppingCart.splice(index,1);
        console.log(`item is removed${item}`);
    }else{
        console.log(`this item isnt found in cart${item}`);
    }
    printCart();
}

function updateItem(item:string,
    quantity:number):void{
        const index = shoppingCart.indexOf(item);
        if( index !==-1){
shoppingCart.splice(index,1,item.repeat(quantity));
console.log(`quantity is updated foe the item${item}.`);
        }else{
            console.log(`the item is not found in the cart${item}.`)
        }
        printCart();
    }

    function printCart():void{
        console.log("cart contents:"+ shoppingCart.join(","));
    }

    // adding items
    
    addItem("apple")
    addItem("peach")
    addItem("orange")
    addItem("kiwi")
    addItem("watermelon")
    

    //remove items
    removeitem("orange")

    //updating quantity
    updateItem("strawberry",3)


