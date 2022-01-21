export default theme;
/**
 * Whole theme object
 */
declare const theme: Readonly<{
    breakpoints: string[];
    mediaQueries: {
        tablet: string;
        desktop: string;
    };
    space: string[];
    sizes: {
        [x: number]: string;
        icons: string[];
        vW: string;
        vH: string;
        1: string;
    };
    fonts: {
        body: string;
        heading: string;
        monospace: string;
    };
    fontSizes: {
        h1: string;
        h2: string;
        h3: string;
        length: number;
        toString(): string;
        toLocaleString(): string;
        pop(): string;
        push(...items: string[]): number;
        concat(...items: ConcatArray<string>[]): string[];
        concat(...items: (string | ConcatArray<string>)[]): string[];
        join(separator?: string): string;
        reverse(): string[];
        shift(): string;
        slice(start?: number, end?: number): string[];
        sort(compareFn?: (a: string, b: string) => number): string[];
        splice(start: number, deleteCount?: number): string[];
        splice(start: number, deleteCount: number, ...items: string[]): string[];
        unshift(...items: string[]): number;
        indexOf(searchElement: string, fromIndex?: number): number;
        lastIndexOf(searchElement: string, fromIndex?: number): number;
        every<S extends string>(predicate: (value: string, index: number, array: string[]) => value is S, thisArg?: any): this is S[];
        every(predicate: (value: string, index: number, array: string[]) => unknown, thisArg?: any): boolean;
        some(predicate: (value: string, index: number, array: string[]) => unknown, thisArg?: any): boolean;
        forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void;
        map<U>(callbackfn: (value: string, index: number, array: string[]) => U, thisArg?: any): U[];
        filter<S_1 extends string>(predicate: (value: string, index: number, array: string[]) => value is S_1, thisArg?: any): S_1[];
        filter(predicate: (value: string, index: number, array: string[]) => unknown, thisArg?: any): string[];
        reduce(callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string): string;
        reduce(callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string, initialValue: string): string;
        reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: string, currentIndex: number, array: string[]) => U_1, initialValue: U_1): U_1;
        reduceRight(callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string): string;
        reduceRight(callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string, initialValue: string): string;
        reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: string, currentIndex: number, array: string[]) => U_2, initialValue: U_2): U_2;
        find<S_2 extends string>(predicate: (this: void, value: string, index: number, obj: string[]) => value is S_2, thisArg?: any): S_2;
        find(predicate: (value: string, index: number, obj: string[]) => unknown, thisArg?: any): string;
        findIndex(predicate: (value: string, index: number, obj: string[]) => unknown, thisArg?: any): number;
        fill(value: string, start?: number, end?: number): string[];
        copyWithin(target: number, start: number, end?: number): string[];
        entries(): IterableIterator<[number, string]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<string>;
        includes(searchElement: string, fromIndex?: number): boolean;
        [Symbol.iterator](): IterableIterator<string>;
        [Symbol.unscopables](): {
            copyWithin: boolean;
            entries: boolean;
            fill: boolean;
            find: boolean;
            findIndex: boolean;
            keys: boolean;
            values: boolean;
        };
    };
    lineHeights: number[];
    fontWeights: {
        regular: number;
        bold: number;
        body: number;
        heading: number;
    };
    colors: {
        blue1: string;
        blue2: string;
        blue3: string;
        blue4: string;
        darkblue1: string;
        darkblue2: string;
        darkblue3: string;
        darkblue4: string;
        teal1: string;
        teal2: string;
        teal3: string;
        teal4: string;
        green1: string;
        green2: string;
        green3: string;
        green4: string;
        yellow1: string;
        yellow2: string;
        yellow3: string;
        yellow4: string;
        orange1: string;
        orange2: string;
        orange3: string;
        orange4: string;
        red1: string;
        red2: string;
        red3: string;
        red4: string;
        black: string;
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        white: string;
        /**
         * Main body text color
         * @type {string}
         */
        text: string;
        /**
         * De-emphasized / footer text color
         * @type {string}
         */
        textLighter: string;
        /**
         * Regular hyperlinks color
         * @type {string}
         */
        link: string;
        /**
         * Regular hyperlinks hover / active color
         * @type {string}
         */
        linkActive: string;
        /**
         * Color for lines, borders
         * @type {string}
         */
        line: string;
        /**
         * Body background color
         * @type {string}
         */
        background: string;
        /**
         * Primary brand color for links, buttons, etc.
         * @type {string}
         */
        primary: string;
        /**
         * A secondary brand color for alternative styling
         * @type {string}
         */
        secondary: string;
        /**
         * A contrast color for emphasizing UI
         * @type {string}
         */
        accent: string;
        /**
         * A background color for highlighting text
         * @type {string}
         */
        highlight: string;
        /**
         * A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
         * @type {string}
         */
        muted: string;
        /**
         * Subtle information or details historic in nature. Often already actioned & in the past. No priority required due to the lack of importance or change.
         * @type {string}
         */
        neutral: string;
        /**
         * Super important, high urgency, high risk, errors...
         * @type {string}
         */
        critical: string;
        /**
         * Guidance & advice. Generally from the UI or business. Functional, calm and non urgent.
         * @type {string}
         */
        info: string;
        /**
         * Good vibes & new things! Wants to get the user to act on something or be aware something good happened.
         * @type {string}
         */
        positive: string;
        /**
         * You should be aware something is happening or mid-way through a process. Could be a risk or an item that needs to be acted upon.
         * @type {string}
         */
        caution: string;
    };
    borders: {
        cardBorder: string;
    };
    borderWidths: any[];
    borderStyles: any[];
    radii: string[];
    shadows: string[];
    letterSpacings: any[];
    zIndices: any[];
    gradients: {
        toDark: string;
        toLight: string;
    };
}>;
