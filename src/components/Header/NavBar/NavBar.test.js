import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./NavBar";
import fizzBuzz from "./fizzBuzz";

describe("NavBar", () => {
  test("Render NavBar", () => {
    const { getByTestId, getAllByTestId } = render(<NavBar />);

    expect(fizzBuzz(3)).toBe("Fizz");
    expect(fizzBuzz(4)).toBe(4);
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(6)).toBe("Fizz");
    expect(fizzBuzz(7)).toBe(7);
    expect(fizzBuzz(9)).toBe("Fizz");
    expect(fizzBuzz(10)).toBe("Buzz");
    expect(fizzBuzz(15)).toBe("FizzBuzz");

    // %3  === 0 return "Fizz"
    // %5 === 0  return "Buzz"
    // %3 and % 5 === 0 return "FizzBuzz"

    // 2 return  2

    // const homeLink = getByTestId("home_link");
    // expect(homeLink).toBeInTheDocument();
    // expect(getByTestId("shop_link")).toBeInTheDocument();
    // expect(getByTestId("about_link")).toBeInTheDocument();
    // expect(getByTestId("contact_link")).toBeInTheDocument();

    const navLinks = getAllByTestId("nav_link");

    expect(navLinks.length).toBe(4);
    // console.log(navLinks[0]);
    expect(navLinks[0]).toHaveTextContent("Home");
    expect(navLinks[1]).toHaveTextContent("Shop");
    expect(navLinks[2]).toHaveTextContent("About");
    expect(navLinks[3]).toHaveTextContent("Contact");

    // expect(navLinks[0].getAttribute("href")).toBe("/profile");
    // expect(navLinks[1].getAttribute("href")).toBe("/about");
    // expect(navLinks[0].getAttribute("href")).toBe("https://www.google.com");
    // expect(navLinks[0].getAttribute("href")).toBe("https://www.google.com");
  });
});
