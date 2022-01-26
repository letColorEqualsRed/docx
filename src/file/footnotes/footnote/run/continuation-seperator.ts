import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("ContinuationSeperator")
export class ContinuationSeperator extends XmlComponent {
    constructor() {
        super("w:continuationSeparator");
    }
}
