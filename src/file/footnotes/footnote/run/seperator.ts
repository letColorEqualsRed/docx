import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("Seperator")
export class Seperator extends XmlComponent {
    constructor() {
        super("w:separator");
    }
}
