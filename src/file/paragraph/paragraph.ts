// http://officeopenxml.com/WPparagraph.php

import { uniqueId } from "convenience-functions";
import { FootnoteReferenceRun } from "file/footnotes/footnote/run/reference-run";
import { RegisterXmlComponent } from "converter/decorators"
import { IContext, IXmlableObject, XmlComponent } from "file/xml-components";

import { TargetModeType } from "../relationships/relationship/relationship";
import { DeletedTextRun, InsertedTextRun } from "../track-revision";
import { ColumnBreak, PageBreak } from "./formatting/break";
import { Bookmark, ConcreteHyperlink, ExternalHyperlink, InternalHyperlink } from "./links";
import { Math } from "./math";
import { IParagraphPropertiesOptions, ParagraphProperties } from "./properties";
import { ImageRun, Run, SequentialIdentifier, SimpleField, SimpleMailMergeField, SymbolRun, TextRun } from "./run";

export type ParagraphChild =
    | TextRun
    | ImageRun
    | SymbolRun
    | Bookmark
    | PageBreak
    | ColumnBreak
    | SequentialIdentifier
    | FootnoteReferenceRun
    | InternalHyperlink
    | ExternalHyperlink
    | InsertedTextRun
    | DeletedTextRun
    | Math
    | SimpleField
    | SimpleMailMergeField;

export interface IParagraphOptions extends IParagraphPropertiesOptions {
    readonly text?: string;
    readonly children?: ParagraphChild[];
}

@RegisterXmlComponent("Paragraph")
export class Paragraph extends XmlComponent {
    private readonly properties: ParagraphProperties;

    constructor(options: string | IParagraphOptions) {
        super("w:p");

        if (typeof options === "string") {
            this.properties = new ParagraphProperties({});
            this.root.push(this.properties);
            this.root.push(new TextRun(options));
            return this;
        }

        this.properties = new ParagraphProperties(options);

        this.root.push(this.properties);

        if (options.text) {
            this.root.push(new TextRun(options.text));
        }

        if (options.children) {
            for (const child of options.children) {
                if (child instanceof Bookmark) {
                    this.root.push(child.start);
                    for (const textRun of child.children) {
                        this.root.push(textRun);
                    }
                    this.root.push(child.end);
                    continue;
                }

                this.root.push(child);
            }
        }
    }

    public prepForXml(context: IContext): IXmlableObject | undefined {
        for (const element of this.root) {
            if (element instanceof ExternalHyperlink) {
                const index = this.root.indexOf(element);
                const concreteHyperlink = new ConcreteHyperlink(element.options.children, uniqueId());
                context.viewWrapper.Relationships.createRelationship(
                    concreteHyperlink.linkId,
                    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
                    element.options.link,
                    TargetModeType.EXTERNAL,
                );
                this.root[index] = concreteHyperlink;
            }
        }

        return super.prepForXml(context);
    }

    public addRunToFront(run: Run): Paragraph {
        this.root.splice(1, 0, run);
        return this;
    }
}
