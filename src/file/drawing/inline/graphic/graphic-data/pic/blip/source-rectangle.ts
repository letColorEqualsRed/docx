import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("SourceRectangle")
export class SourceRectangle extends XmlComponent {
    constructor() {
        super("a:srcRect");
    }
}
