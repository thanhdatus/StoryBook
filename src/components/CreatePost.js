import React, { Component } from 'react';
import '../App.css';

class CreatePost extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='CreatePost'>
        <div>
          <h4>Tạo bài viết</h4>
        </div>
        <div>
          <img
            src='https://avatarfiles.alphacoders.com/175/thumb-175802.jpg'
            width='32px'
            height='32px'
          />
          <textarea placeholder='Anh Tân ơi, anh đang nghĩ gì thế?'></textarea>
        </div>
        <div>
          <button>Ảnh/Video</button>
          <button>Gắn thẻ bạn bè</button>
          <button>Cảm xúc ../</button>
          <button>...</button>
        </div>
      </div>
    );
  }
}

export default CreatePost;
