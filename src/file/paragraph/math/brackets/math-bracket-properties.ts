// http://www.datypic.com/sc/ooxml/e-m_dPr-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { MathBeginningCharacter } from "./math-beginning-character";
import { MathEndingCharacter } from "./math-ending-char";

@RegisterXmlComponent("MathBracketProperties")
export class MathBracketProperties extends XmlComponent {
    constructor(options?: { readonly beginningCharacter: string; readonly endingCharacter: string }) {
        super("m:dPr");

        if (!!options) {
            this.root.push(new MathBeginningCharacter(options.beginningCharacter));
            this.root.push(new MathEndingCharacter(options.endingCharacter));
        }
    }
}
