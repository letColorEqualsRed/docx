import { SpaceType } from "file/space-type";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

class TextAttributes extends XmlAttributeComponent<{ readonly space: SpaceType }> {
    protected readonly xmlKeys = { space: "xml:space" };
}

@RegisterXmlComponent("DeletedPage")
export class DeletedPage extends XmlComponent {
    constructor() {
        super("w:delInstrText");
        this.root.push(new TextAttributes({ space: SpaceType.PRESERVE }));
        this.root.push("PAGE");
    }
}

@RegisterXmlComponent("DeletedNumberOfPages")
export class DeletedNumberOfPages extends XmlComponent {
    constructor() {
        super("w:delInstrText");
        this.root.push(new TextAttributes({ space: SpaceType.PRESERVE }));
        this.root.push("NUMPAGES");
    }
}

@RegisterXmlComponent("DeletedNumberOfPagesSection")
export class DeletedNumberOfPagesSection extends XmlComponent {
    constructor() {
        super("w:delInstrText");
        this.root.push(new TextAttributes({ space: SpaceType.PRESERVE }));
        this.root.push("SECTIONPAGES");
    }
}
