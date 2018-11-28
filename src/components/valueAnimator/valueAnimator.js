import React, {Component} from 'react';

class ValueAnimator extends Component {

    initialized = false;
    targetValue = 20;
    round = 1;

    constructor(props) {
        super(props);
        if (this.props.round !== undefined) {
            this.round = this.props.round;
        }
        this.state = {
            value: 0
        }
    }

    startAnimation = () => {
        if (this.initialized === false) {
            setTimeout(() => {
                this.timer = setInterval(() => {
                    const currentValue = this.state
                    if (currentValue.value >= this.props.targetValue) {
                        clearInterval(this.timer)
                        this.setState({value: this.props.targetValue})
                    } else {
                        this.setState({value: currentValue.value + this.props.targetValue / (this.props.duration / this.props.interval)})
                    }
                }, this.props.interval)
            }, this.props.delay)
        }
        this.initialized = true;
    }

    render() {
        return (
            <span>{new Intl.NumberFormat('ru-RU').format(Math.floor(this.state.value * this.round) / this.round)}</span>
        );
    }
}

export default ValueAnimator;