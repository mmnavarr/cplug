import numeral from "numeral";

export const toCommaDelimitedDollarWithCentsString = (number: number): string => numeral(number).format("$0,0.00");

export const toCommaDelimitedString = (number: number): string => numeral(number).format("0,0");

export const toPercentageString = (number: number): string => numeral(number/100).format("0,0.00%");

export const toSatoshiPrecisionString = (number: number): string => numeral(number).format("0,0.00000000");

export const toUppercaseFirstLetter = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);