// http://www.datypic.com/sc/ooxml/e-m_sSubSupPr-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("MathSubSuperScriptProperties")
export class MathSubSuperScriptProperties extends XmlComponent {
    constructor() {
        super("m:sSubSupPr");
    }
}
