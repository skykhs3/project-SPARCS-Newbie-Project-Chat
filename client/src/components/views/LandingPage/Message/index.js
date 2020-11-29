import React from 'react'
import './Message.css';

function parseTime(time){
    var res = time.split(" ");

    var temp2=" ";
    if(res[3]<12){
        temp2="오전";
    }
    else{
        temp2="오후";
    }
    return temp2+" "+(res[3]==12?res[3]:res[3]%12)+":"+res[4];
  }
  function parseTime2(time){
    var dayTable=['Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    var res = time.split(" ");
    var today=new Date(res[0]+'-'+res[1]+'-'+res[2]).getDay();
    return res[0]+" . "+res[1]+" . "+res[2]+" ( "+dayTable[today]+" ) ";
  }
export default function XMessage(props) {
    const {
        data,
        isMine,
        isShowName,
        startsSequence,
        endsSequence,
        isShowTime,
        showTimestamp
      } = props;
  //     console.log(
  //     [
  
  //       'message',
  // `${isMine ? 'mine' : ''}`,
  // `${startsSequence ? 'start' : ''}`,
  // `${endsSequence ? 'end' : ''}`
  //     ].join(' '));
    return (
   
            <div className={[
              'message',
        `${isMine ? 'mine' : ''}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`
            ].join(' ')}>
              {
                showTimestamp &&
                  <div className="timestamp">
                    { parseTime2(data.date) }
                  </div>
              }
      
      {isShowName===true && isMine===false?(<div className={(isMine?"bubble-name-mine":"bubble-name")}>
                {data.name} ( {data.email} )
            </div>):null}
              <div className="bubble-container">

                 {isMine==true?<div className="timeStamp"> 
                  {isShowTime===true? parseTime(data.date):null}
                  </div>:null}
                <div className="bubble">
                  { data.content }
                </div>
                {isMine==false?<div className="timeStamp"> 
                  {isShowTime===true? parseTime(data.date):null}
                  </div>:null}
              </div>
            </div>
        
    )
}

