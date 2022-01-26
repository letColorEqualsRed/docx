// http://officeopenxml.com/WPalignment.php
// http://officeopenxml.com/WPtableAlignment.php
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

export enum AlignmentType {
    START = "start",
    END = "end",
    CENTER = "center",
    BOTH = "both",
    JUSTIFIED = "both",
    DISTRIBUTE = "distribute",
    LEFT = "left",
    RIGHT = "right",
}

export class AlignmentAttributes extends XmlAttributeComponent<{ readonly val: AlignmentType }> {
    protected readonly xmlKeys = { val: "w:val" };
}

@RegisterXmlComponent("Alignment")
export class Alignment extends XmlComponent {
    constructor(type: AlignmentType) {
        super("w:jc");
        this.root.push(new AlignmentAttributes({ val: type }));
    }
}
