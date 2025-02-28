// http://officeopenxml.com/WPtableGrid.php
import { Paragraph } from "file/paragraph";
import { RegisterXmlComponent } from "converter/decorators"
import { IContext, IXmlableObject, XmlComponent } from "file/xml-components";

import { Table } from "../table";
import { ITableCellPropertiesOptions, TableCellProperties } from "./table-cell-properties";

export interface ITableCellOptions extends ITableCellPropertiesOptions {
    readonly children: (Paragraph | Table)[];
}

@RegisterXmlComponent("TableCell")
export class TableCell extends XmlComponent {
    constructor(readonly options: ITableCellOptions) {
        super("w:tc");

        this.root.push(new TableCellProperties(options));

        for (const child of options.children) {
            this.root.push(child);
        }
    }

    public prepForXml(context: IContext): IXmlableObject | undefined {
        // Cells must end with a paragraph
        if (!(this.root[this.root.length - 1] instanceof Paragraph)) {
            this.root.push(new Paragraph({}));
        }
        return super.prepForXml(context);
    }
}
