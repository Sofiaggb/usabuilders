import { Component } from "react";

class CardsService extends Component {
    render() {
        return (
            <div class="cards">

                <div class="card">
                    <div class="image">
                        <img src="https://assets.codepen.io/43365/bulldog.jpeg" />
                    </div>
                    <div class="content">
                        <h2>Sleepiest Doggo!</h2>
                        <p>Look at this sleepiest pupper!</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default CardsService;