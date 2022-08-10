import useJson from "./interface/useJson";
import {ItemJson, JsonValue} from "./d";

class Item implements useJson {

    parentId: string;
    id: string;
    open: boolean;
    sort: number;
    html: HTMLElement;
    data: object;

    constructor( json: ItemJson ) {

        this.fromJson( json );

    }

    fromJson( json: ItemJson ): boolean {

        this.parentId = json.parentId;
        this.id = json.id;
        this.open = json.open;
        this.sort = json.sort;
        this.html = document.createElement('div');
        this.html.innerHTML = json.html;
        this.data = json.data;
        return true;
    }

    toJson(): ItemJson {

        return {
            parentId: this.parentId,
            id: this.id,
            open: this.open,
            sort: this.sort,
            html: this.html.innerHTML,
            data: this.data,
        };

    }

    expand(){
        this.open = true;
    }

    collapse(){
        this.open = false;
    }

}

export default Item;