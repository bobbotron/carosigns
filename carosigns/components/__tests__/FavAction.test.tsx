import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import FavAction from "../FavAction";
import { Sign } from "../../types/Sign";

// Mock react-redux
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

// Mock the actions
jest.mock("../../redux/favouritesSlice", () => ({
  addFavourite: jest.fn((sign) => ({ type: "ADD_FAV", payload: sign })),
  removeFavourite: jest.fn((sign) => ({ type: "REMOVE_FAV", payload: sign })),
}));

import { useSelector, useDispatch } from "react-redux";
import { addFavourite, removeFavourite } from "../../redux/favouritesSlice";

const mockUseSelector = useSelector as jest.MockedFunction<typeof useSelector>;
const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>;

describe("FavAction", () => {
  const mockSign: Sign = {
    name: "Test Sign",
    icon: "test-icon",
    title: "Test Title",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders star-outline when sign is not in favourites", () => {
    mockUseSelector.mockReturnValue({ favourites: [] });
    mockUseDispatch.mockReturnValue(jest.fn());

    const { getByTestId } = render(<FavAction sign={mockSign} />);

    expect(getByTestId("add-fav-button")).toBeTruthy();
  });

  it("renders star when sign is in favourites", () => {
    mockUseSelector.mockReturnValue({ favourites: [mockSign.name] });
    mockUseDispatch.mockReturnValue(jest.fn());

    const { getByTestId } = render(<FavAction sign={mockSign} />);

    expect(getByTestId("remove-fav-button")).toBeTruthy();
  });

  it("dispatches addFavourite when star-outline is pressed", () => {
    const mockDispatch = jest.fn();
    mockUseSelector.mockReturnValue({ favourites: [] });
    mockUseDispatch.mockReturnValue(mockDispatch);

    const { getByTestId } = render(<FavAction sign={mockSign} />);

    fireEvent.press(getByTestId("add-fav-button"));

    expect(mockDispatch).toHaveBeenCalledWith(addFavourite(mockSign));
  });

  it("dispatches removeFavourite when star is pressed", () => {
    const mockDispatch = jest.fn();
    mockUseSelector.mockReturnValue({ favourites: [mockSign.name] });
    mockUseDispatch.mockReturnValue(mockDispatch);

    const { getByTestId } = render(<FavAction sign={mockSign} />);

    fireEvent.press(getByTestId("remove-fav-button"));

    expect(mockDispatch).toHaveBeenCalledWith(removeFavourite(mockSign));
  });
});
