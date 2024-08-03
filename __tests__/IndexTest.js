/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../src/pages/index";

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: "Create Next App" }) 
    ).toBeInTheDocument();
  });

  it("Check for Getting Started Text", () => {
    render(<Home />);
    expect(screen.getByText("Get started by editing")).toBeInTheDocument();
  });
});
