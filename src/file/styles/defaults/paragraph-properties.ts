import { IParagraphStylePropertiesOptions, ParagraphProperties } from "file/paragraph/properties";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

@RegisterXmlComponent("ParagraphPropertiesDefaults")
export class ParagraphPropertiesDefaults extends XmlComponent {
    constructor(options?: IParagraphStylePropertiesOptions) {
        super("w:pPrDefault");
        this.root.push(new ParagraphProperties(options));
    }
}
