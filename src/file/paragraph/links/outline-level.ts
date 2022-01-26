// http://officeopenxml.com/WPparagraph.php
import { RegisterXmlComponent } from "converter/decorators"
import { Attributes, XmlComponent } from "file/xml-components";

@RegisterXmlComponent("OutlineLevel")
export class OutlineLevel extends XmlComponent {
    constructor(public readonly level: number) {
        super("w:outlineLvl");

        this.root.push(
            new Attributes({
                val: level,
            }),
        );
    }
}
