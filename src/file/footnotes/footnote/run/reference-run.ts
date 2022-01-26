import { Run } from "file/paragraph/run";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

export class FootNoteReferenceRunAttributes extends XmlAttributeComponent<{
    readonly id: number;
}> {
    protected readonly xmlKeys = {
        id: "w:id",
    };
}

@RegisterXmlComponent("FootnoteReference")
export class FootnoteReference extends XmlComponent {
    constructor(id: number) {
        super("w:footnoteReference");

        this.root.push(
            new FootNoteReferenceRunAttributes({
                id: id,
            }),
        );
    }
}

export class FootnoteReferenceRun extends Run {
    constructor(id: number) {
        super({ style: "FootnoteReference" });

        this.root.push(new FootnoteReference(id));
    }
}
