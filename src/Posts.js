import React,{forwardRef} from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar/Avatar'
import ThumbsUpDownOutlinedIcon from '@material-ui/icons/ThumbsUpDownOutlined';
import InputOptions from './InputOptions'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Posts=forwardRef(({name, description,message,photoUrl},ref)=> {
    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <InputOptions Icon ={ThumbsUpDownOutlinedIcon} title ='Like' color='gray'/>
                <InputOptions Icon ={ChatBubbleOutlineOutlinedIcon} title ='Chat' color='gray'/>
                <InputOptions Icon ={ShareOutlinedIcon} title ='Share' color='gray'/>
                <InputOptions Icon ={SendOutlinedIcon} title ='Send' color='gray'/>
            </div>
        </div>
    )
})
export default Posts
