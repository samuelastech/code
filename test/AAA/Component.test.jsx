import { fireEvent, render } from "@testing-library/react";
import { Component } from "./Component";

test('button has to change its text', () => {
  // Arrange
  const { getByRole, getByText } = render(<Component />);
  const button = getByRole('button');

  // Act
  fireEvent.click(button);

  // Assert
  expect(getByText('Clicked')).toBeInTheDocument();
});