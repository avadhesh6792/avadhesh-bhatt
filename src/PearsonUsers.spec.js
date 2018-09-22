import React from "react";
import { shallow } from "enzyme";
import { PearsonUsers } from "./PearsonUsers";

describe("PearsonUsers", () => {
  let component;

  beforeEach(() => {
    component = shallow(<PearsonUsers />);
    let users = [
      {
        id: 14,
        first_name: "Eve",
        last_name: "Holt",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      },
      {
        id: 15,
        first_name: "Charles",
        last_name: "Morris",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      },
      {
        id: 16,
        first_name: "Tracey",
        last_name: "Ramos",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
      }
    ]
    component.setState({users});
  });

  it("renders a h1", () => {
    const h1 = component.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });
  it('should display 3 user', () => {
    const item = component.find('.item');
    expect(item.length).toEqual(3);
  });
  it('should display first name', () => {
    const item = component.find('.first_name');
    item.forEach( (element, index) => {
      expect(element.text()).toEqual(component.state('users')[index].first_name);
    });
  });
  it('should display last name', () => {
    const item = component.find('.last_name');
    item.forEach( (element, index) => {
      expect(element.text()).toEqual(component.state('users')[index].last_name);
    });
  });
  it('should display avatar', () => {
    const item = component.find('.avatar');
    item.forEach( (element, index) => {
      expect(element.prop('src')).toEqual(component.state('users')[index].avatar);
    });
  });
});
