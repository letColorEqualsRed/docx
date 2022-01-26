import { SpaceType } from "file/space-type";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

class TextAttributes extends XmlAttributeComponent<{ readonly space: SpaceType }> {
    protected readonly xmlKeys = { space: "xml:space" };
}

@RegisterXmlComponent("Text")
export class Text extends XmlComponent {
    constructor(text: string) {
        super("w:t");
        this.root.push(new TextAttributes({ space: SpaceType.PRESERVE }));

        this.root.push(text);
    }
}
