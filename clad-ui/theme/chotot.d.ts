export default theme;
/**
 * The theme object
 *
 * Keys are sorted in alphabetically order
 */
declare const theme: Readonly<{
    borders: {
        none: string;
        sm: string;
    };
    borderStyles: {
        none: string;
        solid: string;
    };
    borderWidths: {
        none: "0px";
        sm: "1px";
        md: "2px";
        lg: "3px";
        xl: "4px";
        0: "0px";
        1: "1px";
        2: "2px";
        3: "3px";
        4: "4px";
        length: 5;
        toString(): string;
        toLocaleString(): string;
        pop(): "0px" | "2px" | "4px" | "1px" | "3px";
        push(...items: ("0px" | "2px" | "4px" | "1px" | "3px")[]): number;
        concat(...items: ConcatArray<"0px" | "2px" | "4px" | "1px" | "3px">[]): ("0px" | "2px" | "4px" | "1px" | "3px")[];
        concat(...items: ("0px" | "2px" | "4px" | "1px" | "3px" | ConcatArray<"0px" | "2px" | "4px" | "1px" | "3px">)[]): ("0px" | "2px" | "4px" | "1px" | "3px")[];
        join(separator?: string): string;
        reverse(): ("0px" | "2px" | "4px" | "1px" | "3px")[];
        shift(): "0px" | "2px" | "4px" | "1px" | "3px";
        slice(start?: number, end?: number): ("0px" | "2px" | "4px" | "1px" | "3px")[];
        sort(compareFn?: (a: "0px" | "2px" | "4px" | "1px" | "3px", b: "0px" | "2px" | "4px" | "1px" | "3px") => number): ["0px", "1px", "2px", "3px", "4px"];
        splice(start: number, deleteCount?: number): ("0px" | "2px" | "4px" | "1px" | "3px")[];
        splice(start: number, deleteCount: number, ...items: ("0px" | "2px" | "4px" | "1px" | "3px")[]): ("0px" | "2px" | "4px" | "1px" | "3px")[];
        unshift(...items: ("0px" | "2px" | "4px" | "1px" | "3px")[]): number;
        indexOf(searchElement: "0px" | "2px" | "4px" | "1px" | "3px", fromIndex?: number): number;
        lastIndexOf(searchElement: "0px" | "2px" | "4px" | "1px" | "3px", fromIndex?: number): number;
        every<S extends "0px" | "2px" | "4px" | "1px" | "3px">(predicate: (value: "0px" | "2px" | "4px" | "1px" | "3px", index: number, array: ("0px" | "2px" | "4px" | "1px" | "3px")[]) => value is S, thisArg?: any): this is S[];
        every(predicate: (value: "0px" | "2px" | "4px" | "1px" | "3px", index: number, array: ("0px" | "2px" | "4px" | "1px" | "3px")[]) => unknown, thisArg?: any): boolean;
        some(predicate: (value: "0px" | "2px" | "4px" | "1px" | "3px", index: number, array: ("0px" | "2px" | "4px" | "1px" | "3px")[]) => unknown, thisArg?: any): boolean;
        forEach(callbackfn: (value: "0px" | "2px" | "4px" | "1px" | "3px", index: number, array: ("0px" | "2px" | "4px" | "1px" | "3px")[]) => void, thisArg?: any): void;
        map<U>(callbackfn: (value: "0px" | "2px" | "4px" | "1px" | "3px", index: number, array: ("0px" | "2px" | "4px" | "1px" | "3px")[]) => U, thisArg?: any): U[];
        filter<S_1 extends "0px" | "2px" | "4px" | "1px" | "3px">(predicate: (value: "0px" | "2px" | "4px" | "1px" | "3px", index: number, array: ("0px" | "2px" | "4px" | "1px" | "3px")[]) => value is S_1, thisArg?: any): S_1[];
        filter(predicate: (value: "0px" | "2px" | "4px" | "1px" | "3px", index: number, array: ("0px" | "2px" | "4px" | "1px" | "3px")[]) => unknown, thisArg?: any): ("0px" | "2px" | "4px" | "1px" | "3px")[];
        reduce(callbackfn: (previousValue: "0px" | "2px" | "4px" | "1px" | "3px", currentValue: "0px" | "2px" | "4px" | "1px" | "3px", currentIndex: number, array: ("0px" | "2px" | "4px" | "1px" | "3px")[]) => "0px" | "2px" | "4px" | "1px" | "3px"): "0px" | "2px" | "4px" | "1px" | "3px";
        reduce(callbackfn: (previousValue: "0px" | "2px" | "4px" | "1px" | "3px", currentValue: "0px" | "2px" | "4px" | "1px" | "3px", currentIndex: number, array: ("0px" | "2px" | "4px" | "1px" | "3px")[]) => "0px" | "2px" | "4px" | "1px" | "3px", initialValue: "0px" | "2px" | "4px" | "1px" | "3px"): "0px" | "2px" | "4px" | "1px" | "3px";
        reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: "0px" | "2px" | "4px" | "1px" | "3px", currentIndex: number, array: ("0px" | "2px" | "4px" | "1px" | "3px")[]) => U_1, initialValue: U_1): U_1;
        reduceRight(callbackfn: (previousValue: "0px" | "2px" | "4px" | "1px" | "3px", currentValue: "0px" | "2px" | "4px" | "1px" | "3px", currentIndex: number, array: ("0px" | "2px" | "4px" | "1px" | "3px")[]) => "0px" | "2px" | "4px" | "1px" | "3px"): "0px" | "2px" | "4px" | "1px" | "3px";
        reduceRight(callbackfn: (previousValue: "0px" | "2px" | "4px" | "1px" | "3px", currentValue: "0px" | "2px" | "4px" | "1px" | "3px", currentIndex: number, array: ("0px" | "2px" | "4px" | "1px" | "3px")[]) => "0px" | "2px" | "4px" | "1px" | "3px", initialValue: "0px" | "2px" | "4px" | "1px" | "3px"): "0px" | "2px" | "4px" | "1px" | "3px";
        reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: "0px" | "2px" | "4px" | "1px" | "3px", currentIndex: number, array: ("0px" | "2px" | "4px" | "1px" | "3px")[]) => U_2, initialValue: U_2): U_2;
        find<S_2 extends "0px" | "2px" | "4px" | "1px" | "3px">(predicate: (this: void, value: "0px" | "2px" | "4px" | "1px" | "3px", index: number, obj: ("0px" | "2px" | "4px" | "1px" | "3px")[]) => value is S_2, thisArg?: any): S_2;
        find(predicate: (value: "0px" | "2px" | "4px" | "1px" | "3px", index: number, obj: ("0px" | "2px" | "4px" | "1px" | "3px")[]) => unknown, thisArg?: any): "0px" | "2px" | "4px" | "1px" | "3px";
        findIndex(predicate: (value: "0px" | "2px" | "4px" | "1px" | "3px", index: number, obj: ("0px" | "2px" | "4px" | "1px" | "3px")[]) => unknown, thisArg?: any): number;
        fill(value: "0px" | "2px" | "4px" | "1px" | "3px", start?: number, end?: number): ["0px", "1px", "2px", "3px", "4px"];
        copyWithin(target: number, start: number, end?: number): ["0px", "1px", "2px", "3px", "4px"];
        entries(): IterableIterator<[number, "0px" | "2px" | "4px" | "1px" | "3px"]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<"0px" | "2px" | "4px" | "1px" | "3px">;
        includes(searchElement: "0px" | "2px" | "4px" | "1px" | "3px", fromIndex?: number): boolean;
        [Symbol.iterator](): IterableIterator<"0px" | "2px" | "4px" | "1px" | "3px">;
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
    breakpoints: {
        0: '576px';
        1: '768px';
        2: '992px';
        3: '1200px';
        4: '1400px';
        sm: '576px';
        md: '768px';
        lg: '992px';
        xl: '1200px';
        xxl: '1400px';
    };
    colors: {
        /**
         * Main body text color
         */
        text: "#222222";
        /**
         * De-emphasized / footer text color
         */
        textLighter: "#9B9B9B";
        /**
         * Regular hyperlinks color
         */
        link: "#38699F";
        /**
         * Regular hyperlinks hover color
         */
        linkHover: "#598DC5";
        /**
         * Regular hyperlinks active color
         */
        linkActive: "#2A5079";
        /**
         * Color for borders
         */
        border: "#CACACA";
        /**
         * Color for lines, visual separators
         */
        line: "#E8E8E8";
        /**
         * Body background color
         */
        background: "#F4F4F4";
        /**
         * A background color for highlighting text
         */
        highlight: "#FFF4D6";
        /**
         * A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
         */
        muted: "#CACACA";
        /**
         * Primary brand color for links, buttons, etc.
         */
        primary: "#FFBA00";
        /**
         * Primary brand color for links, buttons, etc.
         */
        primaryDark: "#CC9600";
        /**
         * Primary brand color for links, buttons, etc.
         */
        primaryLight: "#FFCE47";
        /**
         * Background color. Primary brand color for links, buttons, etc.
         */
        primaryBG: "#FFF4D6";
        /**
         * Alternative lighter background color to primaryBG.
         */
        primaryBGLight: "#FFF9EA";
        /**
         * A secondary brand color for alternative styling
         */
        secondary: "#589F39";
        /**
         * A secondary brand color for alternative styling
         */
        secondaryDark: "#42782B";
        /**
         * A secondary brand color for alternative styling
         */
        secondaryLight: "#7AC45A";
        /**
         * Background color. A secondary brand color for alternative styling
         */
        secondaryBG: "#E4F1DE";
        /**
         * Alternative lighter background color to secondaryBG.
         */
        secondaryBGLight: "#F1F8EE";
        /**
         * A contrast color for emphasizing UI
         */
        accent: "#FE9900";
        /**
         * A contrast color for emphasizing UI
         */
        accentDark: "#CC7A00";
        /**
         * A contrast color for emphasizing UI
         */
        accentLight: "#FFB647";
        /**
         * Background color. A contrast color for emphasizing UI
         */
        accentBG: "#FFEFD6";
        /**
         * Alternative lighter background color to accentBG.
         */
        accentBGLight: "#FFF7EA";
        /**
         * Subtle information or details historic in nature. Often already actioned & in the past. No priority required due to the lack of importance or change.
         */
        neutral: "#CACACA";
        /**
         * Subtle information or details historic in nature. Often already actioned & in the past. No priority required due to the lack of importance or change.
         */
        neutralDark: "#9B9B9B";
        /**
         * Subtle information or details historic in nature. Often already actioned & in the past. No priority required due to the lack of importance or change.
         */
        neutralLight: "#E8E8E8";
        /**
         * Background color. Subtle information or details historic in nature. Often already actioned & in the past. No priority required due to the lack of importance or change.
         */
        neutralBG: "#F4F4F4";
        /**
         * Alternative lighter background color to neutralBG.
         */
        neutralBGLight: "#F8F8F8";
        /**
         * Super important, high urgency, high risk, errors...
         */
        critical: "#D0021B";
        /**
         * Super important, high urgency, high risk, errors...
         */
        criticalDark: "#A20214";
        /**
         * Super important, high urgency, high risk, errors...
         */
        criticalLight: "#FD213B";
        /**
         * Background color. Super important, high urgency, high risk, errors...
         */
        criticalBG: "#FFD7DB";
        /**
         * Alternative lighter background color to criticalBG.
         */
        criticalBGLight: "#FFEFF1";
        /**
         * Guidance & advice. Generally from the UI or business. Functional, calm and non urgent.
         */
        info: "#4A90E2";
        /**
         * Guidance & advice. Generally from the UI or business. Functional, calm and non urgent.
         */
        infoDark: "#2275D3";
        /**
         * Guidance & advice. Generally from the UI or business. Functional, calm and non urgent.
         */
        infoLight: "#84B4EB";
        /**
         * Background color. Guidance & advice. Generally from the UI or business. Functional, calm and non urgent.
         */
        infoBG: "#E0EFFF";
        /**
         * Alternative lighter background  to infoBG.
         */
        infoBGLight: "#EFF6FF";
        /**
         * Good vibes & new things! Wants to get the user to act on something or be aware something good happened.
         */
        positive: "#589F39";
        /**
         * Good vibes & new things! Wants to get the user to act on something or be aware something good happened.
         */
        positiveDark: "#42782B";
        /**
         * Good vibes & new things! Wants to get the user to act on something or be aware something good happened.
         */
        positiveLight: "#7AC45A";
        /**
         * Background color. Good vibes & new things! Wants to get the user to act on something or be aware something good happened.
         */
        positiveBG: "#E4F1DE";
        /**
         * Alternative lighter background color to positiveBG.
         */
        positiveBGLight: "#F1F8EE";
        /**
         * You should be aware something is happening or mid-way through a process. Could be a risk or an item that needs to be acted upon.
         */
        caution: "#FFBA00";
        /**
         * You should be aware something is happening or mid-way through a process. Could be a risk or an item that needs to be acted upon.
         */
        cautionDark: "#CC9600";
        /**
         * You should be aware something is happening or mid-way through a process. Could be a risk or an item that needs to be acted upon.
         */
        cautionLight: "#FFCE47";
        /**
         * Background color. You should be aware something is happening or mid-way through a process. Could be a risk or an item that needs to be acted upon.
         */
        cautionBG: "#FFF4D6";
        /**
         * Alternative lighter background color to cautionBG.
         */
        cautionBGLight: "#FFF9EA";
        blue1: '#2275D3';
        blue2: '#4A90E2';
        blue3: '#84B4EB';
        blue4: '#E0EFFF';
        blue5: '#EFF6FF';
        darkblue1: '#2A5079';
        darkblue2: '#38699F';
        darkblue3: '#598DC5';
        darkblue4: '#E1EAF4';
        teal1: '#005C66';
        teal2: '#0094A3';
        teal3: '#00CAE0';
        teal4: '#E1F5F7';
        green1: '#42782B';
        green2: '#589F39';
        green3: '#7AC45A';
        green4: '#E4F1DE';
        green5: '#F1F8EE';
        yellow1: '#CC9600';
        yellow2: '#FFBA00';
        yellow3: '#FFCE47';
        yellow4: '#FFF4D6';
        yellow5: '#FFF9EA';
        orange1: '#CC7A00';
        orange2: '#FE9900';
        orange3: '#FFB647';
        orange4: '#FFEFD6';
        orange5: '#FFF7EA';
        red1: '#A20214';
        red2: '#D0021B';
        red3: '#FD213B';
        red4: '#FFD7DB';
        red5: '#FFEFF1';
        black: '#222222';
        darkgray1: '';
        darkgray2: '';
        darkgray3: '#777777';
        darkgray4: '';
        gray1: '#9B9B9B';
        gray2: '#CACACA';
        gray3: '#E8E8E8';
        gray4: '#F4F4F4';
        gray5: '#F8F8F8';
        white: '#FFFFFF';
    };
    durations: {
        xxxs: 100;
        xxs: 150;
        xs: 300;
        sm: 500;
        md: 1000;
        lg: 2000;
        xl: 4000;
        xxl: 6000;
        xxxl: 8000;
        xxxxl: 10000;
    };
    fonts: {
        body: string;
        heading: string;
        monospace: string;
        urls: {
            body: string;
        };
    };
    fontSizes: {
        h1: "32px";
        h2: "24px";
        h3: "20px";
        h4: "18px";
        h5: "16px";
        h6: "14px";
        body: "14px";
        xxs: "10px";
        xs: "12px";
        sm: "14px";
        md: "16px";
        lg: "18px";
        xl: "20px";
        xxl: "24px";
        xxxl: "32px";
    };
    fontWeights: {
        body: 400;
        heading: 700;
        normal: 400;
        bold: 700;
    };
    gradients: {
        toDark: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 3%, #101426 100%)';
        toLight: 'linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0.00) 100%)';
    };
    letterSpacings: any[];
    lineHeights: {
        xs: 1;
        sm: 1.25;
        md: 1.5;
        lg: 1.75;
        xl: 2;
        xxl: 2.5;
        0: 1;
        1: 1.25;
        2: 1.5;
        3: 1.75;
        4: 2;
        5: 2.5;
        length: 6;
        toString(): string;
        toLocaleString(): string;
        pop(): 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75;
        push(...items: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]): number;
        concat(...items: ConcatArray<1 | 2 | 2.5 | 1.5 | 1.25 | 1.75>[]): (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[];
        concat(...items: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75 | ConcatArray<1 | 2 | 2.5 | 1.5 | 1.25 | 1.75>)[]): (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[];
        join(separator?: string): string;
        reverse(): (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[];
        shift(): 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75;
        slice(start?: number, end?: number): (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[];
        sort(compareFn?: (a: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, b: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75) => number): [1, 1.25, 1.5, 1.75, 2, 2.5];
        splice(start: number, deleteCount?: number): (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[];
        splice(start: number, deleteCount: number, ...items: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]): (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[];
        unshift(...items: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]): number;
        indexOf(searchElement: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, fromIndex?: number): number;
        lastIndexOf(searchElement: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, fromIndex?: number): number;
        every<S_3 extends 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75>(predicate: (value: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, index: number, array: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]) => value is S_3, thisArg?: any): this is S_3[];
        every(predicate: (value: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, index: number, array: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]) => unknown, thisArg?: any): boolean;
        some(predicate: (value: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, index: number, array: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]) => unknown, thisArg?: any): boolean;
        forEach(callbackfn: (value: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, index: number, array: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]) => void, thisArg?: any): void;
        map<U_3>(callbackfn: (value: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, index: number, array: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]) => U_3, thisArg?: any): U_3[];
        filter<S_4 extends 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75>(predicate: (value: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, index: number, array: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]) => value is S_4, thisArg?: any): S_4[];
        filter(predicate: (value: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, index: number, array: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]) => unknown, thisArg?: any): (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[];
        reduce(callbackfn: (previousValue: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, currentValue: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, currentIndex: number, array: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]) => 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75): 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75;
        reduce(callbackfn: (previousValue: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, currentValue: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, currentIndex: number, array: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]) => 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, initialValue: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75): 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75;
        reduce<U_4>(callbackfn: (previousValue: U_4, currentValue: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, currentIndex: number, array: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]) => U_4, initialValue: U_4): U_4;
        reduceRight(callbackfn: (previousValue: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, currentValue: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, currentIndex: number, array: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]) => 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75): 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75;
        reduceRight(callbackfn: (previousValue: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, currentValue: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, currentIndex: number, array: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]) => 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, initialValue: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75): 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75;
        reduceRight<U_5>(callbackfn: (previousValue: U_5, currentValue: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, currentIndex: number, array: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]) => U_5, initialValue: U_5): U_5;
        find<S_5 extends 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75>(predicate: (this: void, value: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, index: number, obj: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]) => value is S_5, thisArg?: any): S_5;
        find(predicate: (value: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, index: number, obj: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]) => unknown, thisArg?: any): 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75;
        findIndex(predicate: (value: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, index: number, obj: (1 | 2 | 2.5 | 1.5 | 1.25 | 1.75)[]) => unknown, thisArg?: any): number;
        fill(value: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, start?: number, end?: number): [1, 1.25, 1.5, 1.75, 2, 2.5];
        copyWithin(target: number, start: number, end?: number): [1, 1.25, 1.5, 1.75, 2, 2.5];
        entries(): IterableIterator<[number, 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75]>;
        keys(): IterableIterator<number>;
        values(): IterableIterator<1 | 2 | 2.5 | 1.5 | 1.25 | 1.75>;
        includes(searchElement: 1 | 2 | 2.5 | 1.5 | 1.25 | 1.75, fromIndex?: number): boolean;
        [Symbol.iterator](): IterableIterator<1 | 2 | 2.5 | 1.5 | 1.25 | 1.75>;
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
    mediaQueries: {
        /**
         * Special media query for occational iPhone 5 (320px) edge casess
         * @type {`screen and (max-width: 320px)` | string}
         */
        ip5: `screen and (max-width: 320px)` | string;
        /**
         * @type {`screen and (min-width: {breakpoints.md})` | string}
         */
        tablet: `screen and (min-width: {breakpoints.md})` | string;
        /**
         * @type {`screen and (min-width: {breakpoints.lg})` | string}
         */
        desktop: `screen and (min-width: {breakpoints.lg})` | string;
    };
    radii: {
        /**
         * No border radius
         */
        none: "0";
        /**
         * Used for images, thumbnails
         */
        xs: "2px";
        /**
         * Used for buttons
         */
        sm: "4px";
        /**
         * Unused
         */
        md: "8px";
        /**
         * Unused
         */
        lg: "14px";
        /**
         * Used for c2c home page thumbnails
         */
        xl: "20px";
        /**
         * Used for pill buttons
         *
         * '9999px'
         */
        pill: string;
        /**
         * Used for icons frames
         *
         * '100%'
         */
        circle: string;
    };
    shadows: {
        none: 'none';
        sm: '0px 2px 4px rgba(0,0,0,.5)';
        md: '0px 0px 8px rgba(0,0,0,.3)';
        lg: '2px 2px 14px rgba(0,0,0,.3)';
    };
    sizes: {
        xxxs: "12px";
        xxs: "16px";
        xs: "20px";
        sm: "24px";
        md: "28px";
        lg: "32px";
        xl: "48px";
        xxl: "64px";
        xxxl: "80px";
        xxxxl: "96px";
        xxxxxl: "128px";
        buttonMaxWidth: "352px";
        $sm: "236px";
        $md: "480px";
        $lg: "636px";
        $xl: "864px";
        vW: '100vw';
        vH: '100vh';
        quarter: '25%';
        third: '33.33%';
        half: '50%';
        twoThird: '66.66%';
        threeQuarter: '75%';
        full: '100%';
    };
    space: {
        none: "0px";
        xxxs: "2px";
        xxs: "4px";
        xs: "8px";
        sm: "12px";
        md: "16px";
        lg: "24px";
        xl: "32px";
        xxl: "48px";
        xxxl: "64px";
        xxxxl: "96px";
        xxxxxl: "128px";
    };
    zIndices: {
        initial: 'auto';
        neutral: 0;
        up: 1;
        down: -1;
        notification: 1900;
        tooltip: 1800;
        modal: 1700;
        dropdown: 1600;
    };
}>;
