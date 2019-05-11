


var today = new Date(); // 오늘 날짜//지신의 컴퓨터를 기준으로
//today 에 Date객체를 넣어줌 //ex)5일  
var date = new Date();

function prevCalendar() {
 today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
 buildCalendar(); // 현재 달 
}
 
function nextCalendar() {//다음달
 today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
 buildCalendar();
}
 
function buildCalendar() {// 현재 달fur
 var nMonth = new Date(today.getFullYear(), today.getMonth(), 1);  // 이번 달의 첫째 날
 var lastDate = new Date(today.getFullYear(), today.getMonth()+1, 0); // 이번 달의 마지막 날
 var tblCalendar = document.getElementById("calendar");     // 테이블 달력을 만들 테이블
 var tblCalendarYM = document.getElementById("calendarYM");    // yyyy년 m월 출력할 곳
 tblCalendarYM.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월";  // yyyy년 m월 출력
// 기존 테이블에 뿌려진 줄, 칸 삭제

 while (tblCalendar.rows.length > 2) {
  tblCalendar.deleteRow(tblCalendar.rows.length -1);
 }
 var row = null;
 row = tblCalendar.insertRow();
 var cnt = 0;
// 1일이 시작되는 칸을 맞추어 줌
    for (i=0; i<nMonth.getDay(); i++) {
    cell = row.insertCell();
    cnt= cnt + 1;
    }



   for (i=1; i<=lastDate.getDate(); i++) { 
     cell = row.insertCell();
    cell.innerHTML= i;// 날짜 ,일 출력 
   //'<input type="button" id="first" value="i" onclick="mwrite()">
     cnt = cnt + 1;
       if (cnt % 7 == 1) {/*일요일 계산*/
        cell.innerHTML = "<font color=red>" + i//1주일이 7일 이므로 일요일 구하기//월화수목금토일을 7로 나눴을때 나머지가 1이면 cnt가 1번째에 위치함을 의미한다 //1번째의 cell에만 색칠
          }    
      if (cnt%7 == 0){// 1주일이 7일 이므로
        cell.innerHTML = "<font color=blue>" + i
          row = calendar.insertRow();}// 줄 추가
      if (today.getFullYear() == date.getFullYear()
           && today.getMonth() == date.getMonth()
           && i == date.getDate()) {//달력에 있는 년,달과 내 컴퓨터의 로컬 년,달이 같고, 일이 오늘의 일과 같으면
          cell.bgColor = "#FAF58C";//셀의 배경색을 노랑으로 
                   }
      
        /*cell.addEventListener('click', event=>{
      var c_yaer = today.getFullYear();
      var c_month = today.getMonth() + 1;
      
      alert( c_yaer+"년" + c_month+"월"+td_day+"일");
       window.location = "write.html";
    }); */    
      }


    }
   

 