import PropTypes from 'prop-types'
import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ({ card, feedback, index, onClick}) => (
    <div className={`card ${feedback}`} onClick={() => onClick(index)}>
        <div className="symbole">
            {feedback === "hidden" ? HIDDEN_SYMBOL : card}
        </div>
    </div>
)

Card.propTypes = {
    card : PropTypes.string.isRequired,
    feedback : PropTypes.oneOf([
        "visible", "hidden", "justMatched", "justMisMatched"
    ]).isRequired,
    onClick : PropTypes.func.isRequired,
    index : PropTypes.number.isRequired,
}


export default Card