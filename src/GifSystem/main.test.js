import React from "react";
import { mount } from "enzyme";
import GifSystem from "./index";

describe("Gif system", () => {
  it("should simply be rendered", () => {
    const wrapper = mount(<GifSystem />);
    expect(wrapper.find("input").length).toEqual(1);
  });
});
