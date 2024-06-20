class Shape {
  static getArea = (param) => {
    throw new Error("Abstract method has no implementation.");
  }

  static getPerimeter = (param) => {
    throw new Error("Abstract method has no implementation.");
  }
}

exports.Shape = Shape;