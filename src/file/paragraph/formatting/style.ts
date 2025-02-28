import { RegisterXmlComponent } from "converter/decorators"
import { Attributes, XmlComponent } from "file/xml-components";

export enum HeadingLevel {
    HEADING_1 = "Heading1",
    HEADING_2 = "Heading2",
    HEADING_3 = "Heading3",
    HEADING_4 = "Heading4",
    HEADING_5 = "Heading5",
    HEADING_6 = "Heading6",
    TITLE = "Title",
}

@RegisterXmlComponent("Style")
export class Style extends XmlComponent {
    constructor(styleId: string) {
        super("w:pStyle");
        this.root.push(
            new Attributes({
                val: styleId,
            }),
        );
    }
}
