// Use to get an Int range, for exemple const age:IntRange<0,99> = 105 will throw an error
// the first number is included, while the last is excluded
type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;
