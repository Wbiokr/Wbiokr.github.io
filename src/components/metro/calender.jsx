import React from 'react';
import '../../style/metro/calender.styl';
// import {Icon,Tooltip} from 'antd';
import Icon from '../icon/icon';

class Calender extends React.Component {
  constructor(props){
    super(props);
    this.state={
      nowYear:new Date().getFullYear(),
      nowMonth:new Date().getMonth()+1,
      nowDay:new Date().getDate(),
      // nowWeek:'',
      // dayNumber:'',
      // prevDayNumber:'',
      // nextDayNumber:'',
      weekDays:['一','二','三','四','五','六','日'],
      dateList:[],
    }
  }
  componentWillMount(){
    // this.getDate();
    // this.getNumber(2017,10);
    // setTimeout(()=>{
    //   // this.renderDate(this.state.dayNumber);

    // },100)
    this.renderDom(this.state.nowYear,this.state.nowMonth);
  }
  render(){
    let eventDom=[];
    if((new Date().getFullYear()===this.state.nowYear)&&(new Date().getMonth()+1===this.state.nowMonth)&&(new Date().getDate()===this.state.nowDay)){
      eventDom.push(<h3>今日安排:</h3>);
      eventDom.push(<p>今天没有事情安排！</p>);
    }
    return (
      <div className='calender'>
        <section className='cal-head'>
          <span className='cal-head-left c-p' onClick={this.prevMonth}><Icon type='arrawUp' /></span>
          <span className='cal-head-month'>{this.state.nowYear}<span>年</span>{this.state.nowMonth}<span>月</span></span>
          <span className='cal-head-right c-p' onClick={this.nextMonth}><Icon type='arrawUp' /></span>
        </section>
        <section className='cal-content'>
          <h3 className='cal-week'>
            {
              this.state.weekDays.map((week,index)=>(
                <span key={index}>{week}</span>
              ))            
            }
          </h3>
          <ul className='cal-date'>
            {
              
              this.state.dateList.map((item,index)=>{
                let name=item.dark===1?'dark':(item.dark===2?'today':'');
                if(this.state.nowMonth!==new Date().getMonth()+1){
                  name=name.replace(/today/g,'');
                }
                const text='今天暂时无事!'
                return (
                  <li key={index*2} className={name}><span className='c-p'>{item.date}</span></li>
                )
              })
            }
          </ul>
        </section>
        <section className='cal-foot'>
            {eventDom}
            
        </section>
      </div>
    )
  }
  prevMonth=()=>{
    const newYear=this.state.nowMonth===1?this.state.nowYear-1:(this.state.nowYear);
    const newMonth=this.state.nowMonth===1?12:(this.state.nowMonth-1);
    this.setState({
      nowYear:newYear,
      nowMonth:newMonth,
    });
    this.renderDom(newYear,newMonth);
  }
  nextMonth=()=>{
    const newYear=this.state.nowMonth===12?this.state.nowYear+1:this.state.nowYear;
    const newMonth=this.state.nowMonth===12?1:this.state.nowMonth+1;
    this.setState({
      nowYear:newYear,
      nowMonth:newMonth,
    })
    this.renderDom(newYear,newMonth);
  }
  renderDom=(year,month)=>{
    let dateList=[];

    const Cale=new Date();
    const nowFirstWeek=new Date(year,month-1,this.state.nowDay).getDay();
    
    // 获取当前月份天数
    const nowMonthNumber=new Date(year,month,0).getDate();

    // 上个月的月份天数
    const prevYear=month===1?year-1:year;
    const prevMonth=month===1?12:month-1;

    const prevMonthNumber=new Date(prevYear,prevMonth,0).getDate();

    // 下个月份天数
    const nextYear=month===12?year+1:year;
    const nextMonth=month===12?1:month+1;

    const nextMonthNumber=new Date(nextYear,nextMonth,0).getDate();

    // 获取本月初周期
    const nowMonthWeekFirst=new Date(year,month-1,1).getDay();

    const prevNumber=nowMonthWeekFirst===0?6:nowMonthWeekFirst-1;

    for(let i=0;i<prevNumber;i++){
      dateList.push({
        date:prevMonthNumber-i,
        dark:1,
      })
    };
    dateList.reverse();
    for(let i=1;i<=nowMonthNumber;i++){
      // alert((i===new Date().getDate())&&(year=new Date().getFullYear())&&(month=new Date().getMonth()+1));
      const obj=((i===new Date().getDate())&&(year=new Date().getFullYear())&&(month=new Date().getMonth()+1))?{date:i,dark:2}:{date:i,dark:0}
      dateList.push(obj);
      
    };

    // 获取当前月份最后一天周期
    const nowMonthWeekLast=new Date(year,month-1,nowMonthNumber).getDay();
    const prevNumberInit=nowMonthWeekLast===0?0:7-nowMonthWeekLast;
    for(let i=0;i<prevNumberInit;i++){
      dateList.push({
        date:i+1,
        dark:1,
      })
    };
    this.state.dateList=dateList;
  }
  // renderDate=(number)=>{
  //   const firstWeek=this.getWeek(this.state.nowYear,this.state.nowMonth,1);
  //   const lastWeek=this.getWeek(this.state.nowYear,this.state.nowMonth,this.state.dayNumber);
  //   const domList=[];
  //   for(let i=0;i<firstWeek;i++){
  //     domList.push(<li key={`prev${i}`}>{this.state.prevDayNumber-(firstWeek-i)}</li>)
  //   }
  //   for(let i=1;i<number+1;i++){
  //     domList.push(<li key={i} className='thisMonthDay'>{i}</li>)
  //   }
  //   let j=1;
  //   for(let i=lastWeek+1;i<7;i++,j++){
  //     domList.push(<li key={`next${i}`}>{j}</li>)
  //   }
  //   this.setState({
  //     dateList: domList,
  //   }) ;
    
  // }
  // getDate=()=>{
  //   const CalDate=new Date()
  //   this.setState({
  //     nowYear:CalDate.getFullYear(),
  //     nowMonth:CalDate.getMonth()+1,
  //     nowDay:CalDate.getDate(),
  //     nowWeek:CalDate.getDay(),
     
  //   })
  // }
  // getNumber=(year,month)=>{
  //   console.log()
  //   const prevDayNumber=month===1?(new Date(year-1,12,0).getDate()):(new Date(year,month-1,0).getDate());
  //   const nextDayNumber=month===12?(new Date(year+1,1,0).getDate()):(new Date(year,month+1,0).getDate());
  //   this.setState({
  //     dayNumber:new Date(year,month,0).getDate(),
  //     prevDayNumber,
  //     nextDayNumber,
  //   })
  //   setTimeout(()=>{
  //     alert(2222)
  //     this.renderDate(this.state.dayNumber);
  //   },100)
  // }
  // getWeek=(year,month,day)=>{
  //   return new Date(year,Number(month)-1,day).getDay()
  // }
}

export default Calender ;