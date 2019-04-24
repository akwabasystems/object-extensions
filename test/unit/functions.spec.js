import "../../src/functions";


describe("Function extensions", () => {

    it("should invoke a function and return a promise", (done) => {
        expect(Function.invoke({})).toBeUndefined();

        function memoized() {
            return 17;
        }

        Function.invoke(memoized).then((result) => {
            expect(result).toBe(17);
            expect(memoized.returnValue).toBe(17);
        });

        Function.invoke(memoized).then((result) => {
            expect(result).toBe(17);
            expect(memoized.returnValue).toBe(17);

            done();
        });
    });

    it("should invoke a function if a condition and met, and return a promise", (done) => {
        function compute() {
            return 15;
        }

        Function.invokeIf(compute, false).then((result) => {
            expect(result).toBeUndefined();
        });

        Function.invokeIf(compute, true).then((result) => {
            expect(result).toBe(15);
            done();
        });
    });

    it("should return the names of function arguments", () => {
        function multiply(a, b) {
            return a * b;
        }

        expect(Function.argumentNames(multiply)).toBe("a,b");
        expect(Function.argumentNames(function nop() {})).toBe("");
    });

    it("should pre-fill a function with a given number of arguments", () => {
        function move(...args) {
            return `Moving - direction: ${args.join(", ")}`;
        }

        let moveRight = Function.withArguments(move);
        expect(moveRight()).toBe("Moving - direction: ");

        moveRight = Function.withArguments(move, "right");
        expect(moveRight()).toBe("Moving - direction: right");

        const moveAnyDirection = Function.withArguments(move, "top", "right", "bottom", "left");
        expect(moveAnyDirection()).toBe("Moving - direction: top, right, bottom, left");
    });

    it("should delay the execution of a function for a specified time unit", (done) => {
        let value = 0;

        function compute() {
            value = 15;
        }

        Function.delay({}, 0.5);
        expect(value).toBe(0);

        Function.delay(compute, 0.5);
        expect(value).toBe(0);

        setTimeout(() => {
            expect(value).toBe(15);
            done();
        }, 1000);
    });

});
