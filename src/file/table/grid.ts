// http://officeopenxml.com/WPtableGrid.php

// <xsd:complexType name="CT_TblGridCol">
//     <xsd:attribute name="w" type="s:ST_TwipsMeasure"/>
// </xsd:complexType>
// <xsd:complexType name="CT_TblGridBase">
//     <xsd:sequence>
//         <xsd:element name="gridCol" type="CT_TblGridCol" minOccurs="0" maxOccurs="unbounded"/>
//     </xsd:sequence>
// </xsd:complexType>

import { twipsMeasureValue } from "file/values";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

@RegisterXmlComponent("TableGrid")
export class TableGrid extends XmlComponent {
    constructor(widths: number[] | string[]) {
        super("w:tblGrid");
        for (const width of widths) {
            this.root.push(new GridCol(width));
        }
    }
}

class GridColAttributes extends XmlAttributeComponent<{ readonly w: number | string }> {
    protected readonly xmlKeys = { w: "w:w" };
}

@RegisterXmlComponent("GridCol")
export class GridCol extends XmlComponent {
    constructor(width?: number | string) {
        super("w:gridCol");
        if (width !== undefined) {
            this.root.push(new GridColAttributes({ w: twipsMeasureValue(width) }));
        }
    }
}
