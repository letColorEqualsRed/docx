import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("StructuredDocumentTagContent")
export class StructuredDocumentTagContent extends XmlComponent {
    constructor() {
        super("w:sdtContent");
    }
}
