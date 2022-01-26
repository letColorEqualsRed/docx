import { SpaceType } from "file/space-type";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";
import { IPageReferenceOptions } from "./pageref-properties";

class TextAttributes extends XmlAttributeComponent<{ readonly space: SpaceType }> {
    protected readonly xmlKeys = { space: "xml:space" };
}

@RegisterXmlComponent("PageReferenceFieldInstruction")
export class PageReferenceFieldInstruction extends XmlComponent {
    constructor(bookmarkId: string, options: IPageReferenceOptions = {}) {
        super("w:instrText");
        this.root.push(new TextAttributes({ space: SpaceType.PRESERVE }));

        let instruction = `PAGEREF ${bookmarkId}`;

        if (options.hyperlink) {
            instruction = `${instruction} \\h`;
        }
        if (options.useRelativePosition) {
            instruction = `${instruction} \\p`;
        }

        this.root.push(instruction);
    }
}
