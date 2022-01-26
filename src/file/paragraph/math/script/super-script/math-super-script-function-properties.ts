// http://www.datypic.com/sc/ooxml/e-m_sSupPr-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("MathSuperScriptProperties")
export class MathSuperScriptProperties extends XmlComponent {
    constructor() {
        super("m:sSupPr");
    }
}
