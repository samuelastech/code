const { Shape } = require("./Shape");

class Quadrilateral extends Shape {
  /**
   * Returns the area of a 4-sided shape
   * @param {number} length 
   * @param {number} width
   * @returns {number} area
   */
  static getArea = (length, width) => {
    return length * width;
  }

  /**
   * Returns the perimeter of a 4-sided shape
   * @param {number} length 
   * @param {number} width 
   * @returns {number} perimeter
   */
  static getPerimeter = (length, width) => {
    return (2 * length) + (2 * width);
  }
}

exports.Quadrilateral = Quadrilateral;