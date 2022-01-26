// http://officeopenxml.com/WPfieldInstructions.php
import { SpaceType } from "file/space-type";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

class TextAttributes extends XmlAttributeComponent<{ readonly space: SpaceType }> {
    protected readonly xmlKeys = { space: "xml:space" };
}

@RegisterXmlComponent("SequentialIdentifierInstruction")
export class SequentialIdentifierInstruction extends XmlComponent {
    constructor(identifier: string) {
        super("w:instrText");
        this.root.push(new TextAttributes({ space: SpaceType.PRESERVE }));
        this.root.push(`SEQ ${identifier}`);
    }
}
