// http://www.datypic.com/sc/ooxml/e-w_sdtPr-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";
import { Alias } from "./alias";

@RegisterXmlComponent("StructuredDocumentTagProperties")
export class StructuredDocumentTagProperties extends XmlComponent {
    constructor(alias: string) {
        super("w:sdtPr");
        this.root.push(new Alias(alias));
    }
}
