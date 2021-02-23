import numeral from "numeral";

export const toCommaDelimitedDollarWithCentsString = (number: number | null, nullState: string = "--"): string => number != null ? numeral(number).format("$0,0.00") : nullState;

export const toCommaDelimitedString = (number: number | null, nullState: string = "--"): string => number != null ? numeral(number).format("0,0") : nullState;

export const toPercentageString = (number: number | null, nullState: string = "--"): string => number != null ? numeral(number/100).format("0,0.00%") : nullState;

export const toSatoshiPrecisionString = (number: number | null, nullState: string = "--"): string => number != null ? numeral(number).format("0,0.00000000") : nullState;

export const toDecimalLetterString = (number: number | null, nullState: string = "--"): string => number != null ? numeral(number).format("$0.00a") : nullState;

export const toUppercaseFirstLetter = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);