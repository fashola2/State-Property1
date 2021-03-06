import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
constructor(props){
  super(props);

  this.state = {
    vehicles: [],
    value: "",
    pilot: ""
  }
  this.handleNameChange = this.handleNameChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}


  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
handleNameChange(event){
  this.setState({
    value: event.target.value,
  })
}


  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
handleSubmit(event){
  event.preventDefault()
  this.setState({
    pilot: this.state.value,
    value: ""
  })
}

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

  componentDidMount() {
    fetch('https://swapi.co/api/vehicles/').then((response) => {
      return response.json()
    }).then((data) => {
      let vehicles = data.results;
      console.log(vehicles)
      this.setState({vehicles: vehicles})
    })
  }


  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:
  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    let vehicleStore = this.state.vehicles;
    let vehicles = vehicleStore.map((vehicles) => {
      return (
      /* Create the vehicle card below: */
      <div key = {vehicles.name} className = "col-md-4">
        <div className="card">
        <div className="card-block">
        <h4 className="card-title">Vehicle: {vehicles.name}</h4>
        <h5></h5><h5>Model: {vehicles.model}</h5>
            <div>
              <div>
                <h5>Specs</h5>
                <ul>
                  <li>Manufacturer: {vehicles.manufacturer}</li>
                  <li>Class: {vehicles.vehicle_class}</li>
                  <li>Passengers: {vehicles.passengers}</li>
                  <li>Crew: {vehicles.crew}</li>
                  <li>Length: {vehicles.length}</li>
                  <li>Max Speed: {vehicles.max_atmosphering_speed}</li>
                  <li>Cargo Capacity: {vehicles.cargo_capacity}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      < /div>
      )
    })
    return (
      <div className="App">
        {/*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.
         */}
        <main className="row">
          <section>
            <div className="jumbotron">
              <h1>Star Wars</h1 > <hr className="my-4"/> < p className = "lead" > The Vehicles of Star Wars < /p>
            </div >
            <div className="card form">
              <div className="card-block">
                <h2>What is your name, pilot?</h2>
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <input id="pilotName" onChange={this.handleNameChange} name="name" type="text" value={this.state.value} placeholder="Enter your name"/>
                  </div>
                  <button type="submit">Submit</button>
                </form>
                <h1>{this.state.pilot}</h1>
              </div>
            </div>
            < div className = "row" >
              {vehicles}
            < /div>
          </section >
        </main>
      </div>
    );
  }
  }

  export default App;
