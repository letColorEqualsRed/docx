// http://officeopenxml.com/WPtextSpecialContent-break.php
import { RegisterXmlComponent } from "converter/decorators"
import { Attributes, XmlComponent } from "file/xml-components";
import { Run } from "../run";

enum BreakType {
    COLUMN = "column",
    PAGE = "page",
    // textWrapping breaks are the default and already exposed via the "Run" class
}

class Break extends XmlComponent {
    constructor(type: BreakType) {
        super("w:br");
        this.root.push(
            new Attributes({
                type,
            }),
        );
    }
}

export class PageBreak extends Run {
    constructor() {
        super({});
        this.root.push(new Break(BreakType.PAGE));
    }
}

export class ColumnBreak extends Run {
    constructor() {
        super({});
        this.root.push(new Break(BreakType.COLUMN));
    }
}

/**
 * Add page break before the paragraph if there is no one added before.
 */
@RegisterXmlComponent("PageBreakBefore")
export class PageBreakBefore extends XmlComponent {
    constructor() {
        super("w:pageBreakBefore");
    }
}
