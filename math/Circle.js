const { Shape } = require("./Shape");

class Circle extends Shape {
  /**
   * Returns the area of a circle
   * @param {number} radius
   * @returns {number} area
   */
  static getArea = (radius) => {
    return Math.PI * radius**2;
  }

  /**
   * Returns the perimeter of a circle
   * @param {number} radius
   * @returns {number} perimeter
   */
  static getPerimeter = (radius) => {
    return 2 * Math.PI * radius;
  }
}

exports.Circle = Circle;