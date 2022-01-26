import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("NoFill")
export class NoFill extends XmlComponent {
    constructor() {
        super("a:noFill");
    }
}
