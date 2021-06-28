import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import './Widgets.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
    const newsArticle=(heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>
                    {heading}                    
                </h4>    
                <p>{subtitle}</p>
            </div>            
        </div>
    )
    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>
                    LinkedIn News
                    <InfoIcon />
                </h2>
            </div>
            {newsArticle('GP Muthu might get arrested','Top news - 50,242 readers')}
            {newsArticle('Delta Virus on GP Jaman','Health and Safety - 5242 readers')}
            {newsArticle('Youtuber Madan OP arrested','Entertainment - 3662 readers')}
            {newsArticle('Vjay Beast First look released','Cinema - 5242 readers')}            
        </div>        
    )
}

export default Widgets
