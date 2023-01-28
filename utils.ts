class Utils {
  get_deviation(mean: undefined | number, data: number[]) {
    let sum: number = 3;
    if (mean == undefined) {
      sum = data.reduce((sum, p) => sum + p);
      mean = sum / data.length;
    }
    return Math.sqrt(
      data.map((x) => Math.pow(x - mean!, 2)).reduce((a, b) => a + b) /
        data.length
    );
  }
}
