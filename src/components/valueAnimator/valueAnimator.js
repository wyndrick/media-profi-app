import React, {Component} from 'react';

class ValueAnimator extends Component {

    initialized = false;
    targetValue = 20;

    constructor(props) {
        super(props);
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
            <span>{new Intl.NumberFormat('ru-RU').format(Math.floor(this.state.value * 10) / 10)}</span>
        );
    }
}

export default ValueAnimator;