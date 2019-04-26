import "../../src/strings";


describe("String extensions", () => {

    it("should trim a string", () => {
        expect(String.trim("   Akwaba   ")).toBe("Akwaba");
    });

    it("should truncate a string", () => {
        const text = "1 University Avenue: Teach. Learn. Connect.";
        expect(String.truncate(text)).toBe("1 University Avenue: Teach....");
        expect(String.truncate(text, 19)).toBe("1 University Ave...");
        expect(String.truncate("Akwaba Systems")).toBe("Akwaba Systems");
    });

    it("should convert a text to camel case", () => {
        expect(String.toCamelCase("university-avenue")).toBe("universityAvenue");
    });

    it("should capitalize a string", () => {
        expect(String.capitalize("akwaba systems inc.")).toBe("Akwaba Systems Inc.");
    });

    it("should escape HTML strings", () => {
        expect(String.escapeHTML("<p>Teach & Learn</p>")).toBe("&lt;p&gt;Teach &amp; Learn&lt;/p&gt;");
    });

    it("should check whether a string is empty", () => {
        expect(String.isEmpty("")).toBeTruthy();
        expect(String.isEmpty("     ")).toBeTruthy();
        expect(String.isEmpty("Akwaba")).toBeFalsy();
        expect(String.isEmpty("   Akwaba  ")).toBeFalsy();
    });

    it("should check whether a string contains a given pattern", () => {
        expect(String.contains("Akwaba Systems", "Systems")).toBeTruthy();
        expect(String.contains("Akwaba Systems", "Inc")).toBeFalsy();
    });

    it("should check whether a string starts with a given pattern", () => {
        expect(String.startsWith("Akwaba Systems", "Akwaba")).toBeTruthy();
        expect(String.startsWith("Akwaba Systems", "Systems")).toBeFalsy();
    });

    it("should check whether a string ends with a given pattern", () => {
        expect(String.endsWith("Akwaba Systems", "Akwaba")).toBeFalsy();
        expect(String.endsWith("Akwaba Systems", "Systems")).toBeTruthy();
    });

    it("should generate a formatted string from a template and an object", () => {
        const object = {
            name: "1UA",
            version: "2.0"
        };
        const template = "Name: {name} - Version: {version}";

        expect(String.format(template, object)).toBe("Name: 1UA - Version: 2.0");
        expect(String.format(template, {})).toBe("Name: {name} - Version: {version}");
    });

    it("should remove scripts from a string", () => {
        const headerContents = "Header contents:<script>alert(\"Hi there\");</script>";
        const footerContents = "Footer contents:<script type='text-javascript'>eval('Hi');</script>";
        expect(String.removeScripts(headerContents)).toBe("Header contents:");
        expect(String.removeScripts(footerContents)).toBe("Footer contents:");
    });

    it("should remove HTML tags from a string", () => {
        const contents = "<h1>Intro:</h1><p>Lorem Ipsum Dolor</p>";
        expect(String.removeTags(contents)).toBe("Intro:Lorem Ipsum Dolor");
    });

    it("should convert a string to Unicode", () => {
        expect(String.toUnicode("A")).toBe("\\u0041");
    });

});
