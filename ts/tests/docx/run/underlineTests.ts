import * as u from "../../../docx/run/underline";
import {TextRun} from "../../../docx/run/text-run";
import {assert} from "chai";

function jsonify(obj: Object) {
    let stringifiedJson = JSON.stringify(obj);
    return JSON.parse(stringifiedJson);
}

describe("Underline", () => {

    describe("#constructor()", () => {

        it("should create a new Underline object with u:u as the rootKey", () => {
            let underline = new u.Underline();
            let newJson = jsonify(underline);
            assert.equal(newJson.rootKey, "w:u");
        });
    });
});

describe("DashDotDotHeavyUnderline", () => {

    describe("#constructor()", () => {
        it("should have u:u as the rootKey", () => {
            let underline = new u.DashDotDotHeavyUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.rootKey, "w:u");
        });

        it("should put value in attribute", () => {
            let underline = new u.DashDotDotHeavyUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.root[0].root.val, "dashDotDotHeavy");
        });
    });
});

describe("DashDotDotHeavyUnderline", () => {

    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            let underline = new u.DashDotHeavyUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.root[0].root.val, "dashDotHeavy");
        });
    });
});

describe("DashDotDotHeavyUnderline", () => {

    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            let underline = new u.DashLongHeavyUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.root[0].root.val, "dashLongHeavy");
        });
    });
});

describe("DashDotDotHeavyUnderline", () => {

    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            let underline = new u.DashLongUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.root[0].root.val, "dashLong");
        });
    });
});

describe("DashDotDotHeavyUnderline", () => {

    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            let underline = new u.DashUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.root[0].root.val, "dash");
        });
    });
});

describe("DashDotDotHeavyUnderline", () => {

    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            let underline = new u.DotDashUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.root[0].root.val, "dotDash");
        });
    });
});

describe("DashDotDotHeavyUnderline", () => {

    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            let underline = new u.DotDotDashUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.root[0].root.val, "dotDotDash");
        });
    });
});

describe("DashDotDotHeavyUnderline", () => {

    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            let underline = new u.DottedHeavyUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.root[0].root.val, "dottedHeavy");
        });
    });
});

describe("DashDotDotHeavyUnderline", () => {

    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            let underline = new u.DottedUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.root[0].root.val, "dotted");
        });
    });
});

describe("DashDotDotHeavyUnderline", () => {

    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            let underline = new u.DoubleUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.root[0].root.val, "double");
        });
    });
});

describe("DashDotDotHeavyUnderline", () => {

    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            let underline = new u.SingleUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.root[0].root.val, "single");
        });
    });
});

describe("DashDotDotHeavyUnderline", () => {

    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            let underline = new u.ThickUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.root[0].root.val, "thick");
        });
    });
});

describe("DashDotDotHeavyUnderline", () => {

    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            let underline = new u.WaveUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.root[0].root.val, "wave");
        });
    });
});

describe("DashDotDotHeavyUnderline", () => {

    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            let underline = new u.WavyDoubleUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.root[0].root.val, "wavyDouble");
        });
    });
});

describe("DashDotDotHeavyUnderline", () => {

    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            let underline = new u.WavyHeavyUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.root[0].root.val, "wavyHeavy");
        });
    });
});

describe("DashDotDotHeavyUnderline", () => {

    describe("#constructor()", () => {
        it("should put value in attribute", () => {
            let underline = new u.WordsUnderline();
            let newJson = jsonify(underline);
            assert.equal(newJson.root[0].root.val, "words");
        });
    });
});