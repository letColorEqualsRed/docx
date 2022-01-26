// http://officeopenxml.com/WPstyleGenProps.php
import { decimalNumber } from "file/values";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

class ComponentAttributes extends XmlAttributeComponent<{
    readonly val: string | number;
}> {
    protected readonly xmlKeys = { val: "w:val" };
}

@RegisterXmlComponent("Name")
export class Name extends XmlComponent {
    constructor(value: string) {
        super("w:name");
        this.root.push(new ComponentAttributes({ val: value }));
    }
}

@RegisterXmlComponent("UiPriority")
export class UiPriority extends XmlComponent {
    constructor(value: number) {
        super("w:uiPriority");
        this.root.push(new ComponentAttributes({ val: decimalNumber(value) }));
    }
}

@RegisterXmlComponent("TableProperties")
export class TableProperties extends XmlComponent {}

@RegisterXmlComponent("RsId")
export class RsId extends XmlComponent {}
