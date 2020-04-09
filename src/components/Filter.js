import React, { Component } from 'react';
import '../App.css';

class Filter extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='Filter'>
        <div>
          <div>
            <h4>Bài viết</h4>
          </div>
          <div className='filter-btn'>
            <div>
              <button>
                <span>
                  <img
                    src='https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-gear-1.png'
                    width='16px'
                    height='16px'
                  />
                </span>
                <span>Bộ lọc</span>
              </button>
            </div>

            <div>
              <button>
                <span>
                  <img
                    src='https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-gear-1.png'
                    width='16px'
                    height='16px'
                  />
                </span>
                <span>Quản lý bài viết</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img
              src='https://cdn4.iconfinder.com/data/icons/eldorado-layout/40/preview_list-512.png'
              width='20px'
              height='20px'
            />
            <p>Xem theo danh sách</p>
          </div>
          <div>
            <img
              src='https://cdn4.iconfinder.com/data/icons/eldorado-layout/40/preview_list-512.png'
              width='20px'
              height='20px'
            />
            <p>Xem theo danh sách</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
