// http://www.datypic.com/sc/ooxml/e-m_naryPr-1.html
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";

import { MathAccentCharacter } from "./math-accent-character";
import { MathLimitLocation } from "./math-limit-location";
import { MathSubScriptHide } from "./math-sub-script-hide";
import { MathSuperScriptHide } from "./math-super-script-hide";

@RegisterXmlComponent("MathNArayProperties")
export class MathNArayProperties extends XmlComponent {
    constructor(accent: string, hasSuperScript: boolean, hasSubScript: boolean) {
        super("m:naryPr");

        this.root.push(new MathAccentCharacter(accent));
        this.root.push(new MathLimitLocation());

        if (!hasSuperScript) {
            this.root.push(new MathSuperScriptHide());
        }

        if (!hasSubScript) {
            this.root.push(new MathSubScriptHide());
        }
    }
}
