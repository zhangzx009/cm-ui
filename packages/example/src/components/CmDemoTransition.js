import './transition.css'
const CmTransition = {


    render() {
        return (<transition name={this.transName}>
            <div vShow={this.show}>this is the transition {this.msg}</div>
        </transition>)
    }
}

CmTransition.props = {
    msg: String,
    show: Boolean,
    transName:String
}

export default CmTransition
