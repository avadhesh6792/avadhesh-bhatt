import React from "react";
import { mount } from "enzyme";
import PearsonUsers from "./PearsonUsers";
import UserProfile from './UserProfile';

describe("PearsonUsers", () => {
  let component;

  beforeEach(() => {
    component = mount(<PearsonUsers />);
    let users = [
      {
        id: 1,
        first_name: "Eve",
        last_name: "Holt",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      },
      {
        id: 2,
        first_name: "Charles",
        last_name: "Morris",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      },
      {
        id: 3,
        first_name: "Tracey",
        last_name: "Ramos",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
      }
    ];
    component.setState({users});
  });

  it("renders a h1", () => {
    const h1 = component.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });

  it('should display 3 user profile', () => {
    const item = component.find(UserProfile);
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

  it('should delete a user', () => {
    const deleteButton = component.find('#item-1 button');
    deleteButton.simulate('click');
    expect(component.state('users').length).toEqual(2);
  });

  
  it('should remove duplicate users', () => {
    let duplicateUsers = [
      {
        id: 1,
        first_name: "Eve",
        last_name: "Holt",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      },
      {
        id: 1,
        first_name: "Charles",
        last_name: "Morris",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      }
    ];
    let obj = new PearsonUsers();
    expect(obj.removeDuplidateUsers(duplicateUsers).length).toBe(1);
  });
  
});
