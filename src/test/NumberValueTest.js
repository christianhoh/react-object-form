import React          from 'react';
import ReactObjectForm  from '../ReactObjectForm';
import chai from 'chai'
import { render, mount } from 'enzyme'
import chaiString from 'chai-string'
const expect = chai.use(chaiString).expect;


let data = {
  "name": "Nike Floder",
  "username": "Katrin_Bussmann",
  "email": "Emilian20@yahoo.com",
  "address": {
    "street": "Krodinger Islands",
    "suite": "Suite 232",
    "city": "Dittmer land",
    "zipcode": "28357",
    "geo": {
      "lat": "79.8318",
      "lng": "160.5794"
    }}};
    

describe("ReactObjectForm", () =>{
  it("should render empty input for Number.NaN",() => {
    const form = render(<ReactObjectForm object={{number: Number.NaN}} id="number-form"/>);
    expect(form.find("input").attr("value")).to.be.equal("");
  });
});
    
    
    