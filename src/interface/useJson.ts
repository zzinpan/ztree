import {JsonValue} from "../d";

interface useJson {

    fromJson( json: JsonValue ): boolean;
    toJson(): object;

}

export default useJson;