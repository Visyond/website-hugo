import React from 'react';
import format from 'date-fns/format';

export default class Pricing extends React.Component {
    render() {
        const { entry, widgetFor, getAsset } = this.props;
        let image = getAsset(entry.getIn(['data', 'image']));

        return (
            <div>
            <div className="first-section pri-fir">
  
              <h2 className="pri-fir__title">
                { entry.getIn(['data', 'topTitle']) }
              </h2>
              
              <div className="pri-fir__under-title">
                { entry.getIn(['data', 'topSubTitle']) }
              </div>

              <div className="pri-fir__btns-wrap">
                
                <a href={ entry.getIn(['data', 'signUpURL']) } className="pri-fir__link pri-fir__link--sign-up">
                free sign up
                </a>
                

                <button className="pri-fir__link pri-fir__link--btn js-btn-video">
                  watch video
                </button>

                <a href={ entry.getIn(['data', 'requestURL']) } className="pri-fir__link pri-fir__link--request">
                  request a demo
                </a>
              </div>

              <div className="pri-fir__popup js-popup">
                <div className="pri-fir__iframe-wrap">
                  <button className="pri-fir__popup-close js-popup-close"></button>
                  <p>{ entry.getIn(['data', 'watchVideoURL']) }</p>

                </div>
              </div>
            </div>




            <div className="second-section pri-sec">
              <div className="pri-sec__table-wrapper">
                <table className="pri-sec__table">

                <thead className="pri-sec__table-head">
                  <tr className="pri-sec__table-header">
                    <th className="pri-sec__table-data">
                      Price:
                    </th>

                    {(entry.getIn(["data", "tableHead"]) || []).map((item, index) => { return
                    <th className="pri-sec__table-data" key={index}>

                      <div className="pri-sec__table-header-name">
                        {item.get('name')}
                      </div>

                      <a href="{item.get('linkurl')}" className="pri-sec__table-header-btn">
                        {item.get('linktext')}
                      </a>
                      
                      <div className="pri-sec__table-header-price">
                        {item.get('price')}
                      </div>  

                      <a href="{item.get('contactlink')}" className="pri-sec__table-header-contact">
                        {item.get('contacttext')}
                      </a>
                      
                      <div className="pri-sec__table-header-descr">
                        {item.get('descr')}
                      </div>

                    </th> })}
                  </tr>
                </thead>

                {(entry.getIn(["data", "tableBody"]) || []).map((item, index) => { return
                <tbody className="pri-sec__table-body" key={index}>

                  <tr className="pri-sec__table-row pri-sec__table-row--title">
                    <td className="pri-sec__table-data">
                      {item.get('title')}
                    </td>
                  </tr>
                  
                  {item.get('item.row').map((row, index) => {
                    return 
                    <tr className="pri-sec__table-row" key={index}>
                      <td className="pri-sec__table-data">
                        {row.get('rowname')}
                      </td>
                      {row.get('row.cells').map((cell, index) => {
                        return
                        <td className="pri-sec__table-data">
                          {cell.get('cell')}
                          {cell.get('check')} ? yes : ''
                        </td>
                      })}

                    </tr>
                  })}
                  
                </tbody>})}
              </table>
              </div>
            </div>



            </div>
        );
    }
}
