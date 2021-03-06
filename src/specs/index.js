import React from "react";
import ReactObjectForm from "../ReactObjectForm";
import 'react-select/dist/react-select.css';

describe("ReactObjectForm", function() {
  this.header(`## ReactObjectForm compoent. Form from JSON.`); // Markdown.
  let data = {
    "name": "Vern Schuster Dr.",
    "username": "Delores.Kerluke62",
    "email": "Burnice_Kiehn87@yahoo.com",
    "male": true,
    "address": {
      "street": "Eddy Blvd.",
      "suite": "Suite 381",
      "city": "Raynor land",
      "zipcode": "61031",
      "geo": {
        "lat": Number.NaN,
        "lng": 177.4623
      }
    },
    "phone": "1-" +
    "544-246-0502",
    "website": "lorena.name",
    "company": {
      "name": "Murray, Hirthe and Parisian",
      "catchPhrase": "Decentralized systemic productivity",
      "bs": "plug-and-play utilize experiences"
    },
    "id": 10
  };
  
  let config = [];

  before(() => {
    // Runs when the Suite loads.
    // Use this to load your component-under-test.
    this.component( <ReactObjectForm object={data}
                                config={config}
                                id={"object-form-1"}/> );
  });

  it("reload", () => {
    this.component( <ReactObjectForm
      object={data}
      config={config}
      id={"object-form-1"}/> );
  });

  section("Config", () => {
    it("Hide name property", () => {
      this.props({config:[{
        name:"name",
        hide: true}]});
    });
    it("Change name label to NAME", () => {this.props({config:[{name:"name", label: "NAME"}]})});
    it("Select from different streets", () => {
      let props = this.props;
      this.props({
        config: [{name:"address", config:[{
          name: "street",
          options:[
          {value:"street-1", label:"Street One"},
          {value:"street-2", label:"Two Street"}
        ]}]}],
        changeHandler: value => this.props({object: value})
      })
    });
    it("Select multiple streets", () => {
      let data = {
        "name": "Vern Schuster Dr.",
        "username": "Delores.Kerluke62",
        "email": "Burnice_Kiehn87@yahoo.com",
        "male": true,
        "address": {
          "street": ["street-1"],
          "suite": "Suite 381",
          "city": "Raynor land",
          "zipcode": "61031",
          "geo": {
            "lat": "-45.3177",
            "lng": "177.4623"
          }
        },
        "phone": "1-" +
        "544-246-0502",
        "website": "lorena.name",
        "company": {
          "name": "Murray, Hirthe and Parisian",
          "catchPhrase": "Decentralized systemic productivity",
          "bs": "plug-and-play utilize experiences"
        },
        "id": 10
      };
      this.props({
        object: data,
        config: [{name:"address", config:[{
          name: "street",
          multi: true,
          options:[
            {value:"street-1", label:"Street One"},
            {value:"street-2", label:"Two Street"}
          ]}]}],
        changeHandler: value => this.props({object: value})
      })
    });
    it("Set global change handler", () => {
      this.props({changeHandler: (changedObject) => alert(JSON.stringify(changedObject))})
    });
    it("Live update object", () => {
      this.props({changeHandler: (changedObject) => this.props({object: changedObject})});
    });
    it("Custom renderer component.", () => {
      this.props({
        config: [{name: "name", component: ({value}) => <span className="veryCustom">{value.toUpperCase()}</span>}],
        object: {name: "foo"}
      })
    });
  });
});