import useJson from "./interface/useJson";

class Item implements useJson {

    private parentId: string;
    private id: string;
    private data: object;
    private childrens: Array<Item>;

    constructor( parentId: string = null, id: string, data: object = {}, childrens: Array<> ) {

        this.id = id;

    }


    static fromJson( json: object ): Item {

        return new Item( json.parentId, json.id, json.data, json.childrens );

    }

    fromJson( json: object ): boolean {



        return false;
    }

    toJson(): object {
        return {
            parentId: this.parentId,
            id: this.id,
            data: this.data,
            childrens: this.childrens.map( children => children.toJson() )
        };
    }

}

export default Item;