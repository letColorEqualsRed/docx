// http://officeopenxml.com/drwSp-outline.php
import { RegisterXmlComponent } from "converter/decorators"
import { XmlComponent } from "file/xml-components";
import { NoFill } from "./no-fill";

@RegisterXmlComponent("Outline")
export class Outline extends XmlComponent {
    constructor() {
        super("a:ln");

        this.root.push(new NoFill());
    }
}
