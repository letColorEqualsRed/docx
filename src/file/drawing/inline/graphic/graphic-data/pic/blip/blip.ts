import { IMediaData } from "file/media";
import { RegisterXmlComponent } from "converter/decorators"
import { XmlAttributeComponent, XmlComponent } from "file/xml-components";

class BlipAttributes extends XmlAttributeComponent<{
    readonly embed: string;
    readonly cstate: string;
}> {
    protected readonly xmlKeys = {
        embed: "r:embed",
        cstate: "cstate",
    };
}

@RegisterXmlComponent("Blip")
export class Blip extends XmlComponent {
    constructor(mediaData: IMediaData) {
        super("a:blip");
        this.root.push(
            new BlipAttributes({
                embed: `rId{${mediaData.fileName}}`,
                cstate: "none",
            }),
        );
    }
}
