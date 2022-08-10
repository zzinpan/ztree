import Item from "./Ztree.Item";
import useJson from "./interface/useJson";
import {ItemJson, queryOrElement} from "./d";

class Ztree implements useJson {

    private element: HTMLElement;
    private items: Array<Item>;

    constructor( element: queryOrElement ) {

        if( typeof element === 'string' ){
            this.element = document.querySelector( element );
        }else{
            this.element = element;
        }

        this.items = [];

    }

    fromJson( json: Array<ItemJson> ): boolean {

        this.items = json.map( itemJson => new Item( itemJson ) );
        return true;

    }

    toJson(): object {

        return this.items.map( item => item.toJson() );

    }

    addItem( json: ItemJson ): boolean {

        this.items.push( new Item( json ) );
        return true;

    }

    private getChildrensById( id: string, recursive: boolean = false ): Array<Item> {

        const childrens: Array<Item> = [];

        this.items.forEach( item => {

            if( item.parentId === id ){
                childrens.push( item );
            }

            if( recursive === true ){
                childrens.concat( this.getChildrensById( item.id, true ) );
            }

        } );

        return childrens;

    }

    removeItemById( id: string ): Array<ItemJson> {

        const removeItem = this.items.find( item => item.id === id );
        const removeItems = this.getChildrensById( id, true );
        removeItems.unshift( removeItem );

        for( let i = removeItems.length - 1; -1 < i; --i ){

            const item = removeItems[ i ];
            const index = this.items.indexOf( item );
            this.items.splice( index, 1 );

        }

        return removeItems.map( item => item.toJson() );

    }

}

export default Ztree;