import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("FootnoteRef")
export class FootnoteRef extends XmlComponent {
    constructor() {
        super("w:footnoteRef");
    }
}
