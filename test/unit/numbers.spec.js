import "../../src/numbers";


describe("Number extensions", () => {

    it("should convert numbers to time unit representations", () => {
        expect(Number.seconds(1)).toBe(1000);
        expect(Number.minutes(1)).toBe(60000);
        expect(Number.hours(1)).toBe(3600000);
        expect(Number.days(1)).toBe(86400000);
        expect(Number.weeks(1)).toBe(7 * 86400000);
        expect(Number.months(1)).toBe(30 * 86400000);
        expect(Number.years(1)).toBe(365.25 * 86400000);
    });

    it("should create a date from a number", () => {
        const date = Number.toDate(1514793600000);

        expect(date instanceof Date).toBeTruthy();
        expect(date.getFullYear()).toBe(2018);
        expect(date.getMonth()).toBe(0);
        expect(date.getDate()).toBe(1);
    });

    it("should invoke an iterator for a specified number of times", () => {
        const name = "Akwaba";
        let result = [];

        Number.times(2, () => {
            result.push(name);
        });

        expect(result.join(", ")).toBe("Akwaba, Akwaba");

        result = [];
        Number.times(-1, () => {
            result.push(name);
        });
        expect(result.length).toBe(0);
    });

    it("should pad a number with zeros", () => {
        expect(Number.toPaddedString(7, 3)).toBe("007");
    });

    it("should create a range of numbers up to a given target", () => {
        expect(Number.upTo(1, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(Number.upTo(1, 5, 2)).toEqual([1, 3, 5]);
        expect(Number.upTo(1, 5, -1)).toBe(1);
    });

    it("should create a range of numbers down to a given target", () => {
        expect(Number.downTo(5, 1)).toEqual([5, 4, 3, 2, 1]);
        expect(Number.downTo(5, 1, 2)).toEqual([5, 3, 1]);
        expect(Number.downTo(5, 1, -1)).toBe(5);
    });

    it("should create a range of numbers up or down to a given target", () => {
        expect(Number.to(1, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(Number.to(5, 1)).toEqual([5, 4, 3, 2, 1]);
    });

    it("should return the ASCII character for a given number", () => {
        expect(Number.toChar(65)).toBe("A");
    });
});
