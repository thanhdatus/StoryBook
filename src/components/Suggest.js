import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../App.css';

class Suggest extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='Suggest'>
        <div>
          <span>Gợi ý cho bạn</span>
          <a href='#'>Xem tất cả</a>
        </div>
        <div>
          <div className='list'>
            <div className='list-suggest'>
              <img
                src='https://avatarfiles.alphacoders.com/175/thumb-175802.jpg'
                width='32px'
                height='32px'
              />
              <div>
                <span>phong0908</span>
                <span>Gợi ý cho bạn</span>
              </div>
            </div>
            <div>
              <a href='#'>Theo dõi</a>
            </div>
          </div>
          <div className='list'>
            <div className='list-suggest'>
              <img
                src='https://avatarfiles.alphacoders.com/175/thumb-175802.jpg'
                width='32px'
                height='32px'
              />
              <div>
                <span>phong0908</span>
                <span>Gợi ý cho bạn</span>
              </div>
            </div>
            <div>
              <a href='#'>Theo dõi</a>
            </div>
          </div>
          <div className='list'>
            <div className='list-suggest'>
              <img
                src='https://avatarfiles.alphacoders.com/175/thumb-175802.jpg'
                width='32px'
                height='32px'
              />
              <div>
                <span>phong0908</span>
                <span>Gợi ý cho bạn</span>
              </div>
            </div>
            <div>
              <a href='#'>Theo dõi</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Suggest;
