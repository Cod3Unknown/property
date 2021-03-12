
//后端服务地址配置
const  urlRequest='http://localhost:8000';
// const  urlRequest='http://192.168.43.104:4433';
// const  urlRequest='https://192.168.101.120:443';
// const  urlRequest='http://192.168.101.81:8081';

//js全局变量
function  url()
{
  return urlRequest;
}

//菜单
function subMenuPageTo(obj) {
  // console.log(obj.innerHTML.replace("<i class=\"fa fa-circle-o\"></i>",""))
  document.getElementById("new").click();
  var ob=$(obj).attr("vvvv");

  document.getElementById(ob).innerHTML=$(obj).attr("id");
  document.getElementById(ob).title=obj.innerHTML.replace("<i class=\"fa fa-circle-o\"></i>","")
  document.getElementById(ob).click();
}

//判断code==200
// function is_success(x) {
//   if(x.code==200){
//     // setCookie("tok", x.token,1);
//     // $("#token")[0].innerHTML=x.token;
//     // if(x.token==""){
//     //   alert("已有人登录此账号")
//     //   clearCookie()
//     //   $("#login").show()
//     //   $("#shouye").hide()
//     // }
//
//     // console.log("返回来的tok"+x.token)
//       return x.data;
//   } else if (x.code==401){
//     alert("登录已过期！")
//     clearCookie()
//     $("#login").show();
//     $("#shouye").hide();
//   } else{
//     alert("网络错误")
//     // alert(x.message)
//     // clearCookie()
//     // $("#login").show();
//     // $("#shouye").hide();
//   }
// }




//home2的编辑按钮
function sys_uio(x,y){
  document.getElementById("sys_uio").innerHTML=JSON.stringify(y);
  document.getElementById("sys_uio").value=x;
  document.getElementById("sys_uio").click();
}


//正常开发的编辑
function sys_dept_edit(x){
  document.getElementById("sys_dept_edit").innerHTML=x;
  document.getElementById("sys_dept_edit").click();
}
//正常开发的删除
function sys_dept_del(x){
  document.getElementById("sys_dept_del").innerHTML=x;
  document.getElementById("sys_dept_del").click();
}


//home的编辑删除
function sys_edit(x){
  document.getElementById("sys_edit").innerHTML=x;
  document.getElementById("sys_edit").click();
}
function sys_del(x){
  document.getElementById("sys_del").innerHTML=x;
  document.getElementById("sys_del").click();
}


//角色编辑
function sys_role_edit(x){
  document.getElementById("sys_role_edit").innerHTML=x;
  document.getElementById("sys_role_edit").click();
}
//角色删除
function sys_role_del(x){
  document.getElementById("sys_role_del").innerHTML=x;
  document.getElementById("sys_role_del").click();
}

//大航首页结束任务批次
function endThisBatch(x){
  document.getElementById("end_batch").innerHTML=x;
  document.getElementById("end_batch").click();
}

//大航首页的下发参数
function sendParam(x){
  document.getElementById("sendParam").innerHTML=x;
  document.getElementById("sendParam").click();
}

//编辑
function edit(x){
  document.getElementById("edit").innerHTML=x;
  document.getElementById("edit").click();
}


function Appendzero(obj) {
  if (obj < 10)
    return "0" + obj;
  else
    return obj;
}

var lang
function time(){
  var vWeek,vWeek_s,vDay;
  vWeek = [lang['Sunday'], lang['Monday'],lang['Tuesday'],lang['Wednesday'], lang['Thursday'], lang['Friday'],lang['Saturday']];
  var date =  new Date();
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  vWeek_s = date.getDay();
  document.getElementById("mytime").innerHTML = Appendzero(year) + "." + Appendzero(month) + "." + Appendzero(day) + "." + "\t" + Appendzero(hours) + ":" + Appendzero(minutes) +":" + Appendzero(seconds) + "\t" + vWeek[vWeek_s] ;
  // document.getElementById("mytime").innerHTML = year + "." + month + "." + day + "." + "\t" + hours + ":" + minutes +":" + seconds + "\t" + vWeek[vWeek_s] ;

  return year + "-" + month + "-" + day  + "\t" + hours + ":" + minutes +":" + seconds;
}

function setInterva(x){
  lang=x
  setInterval("time()",500);
}

function format(){
 return  new Date().Format("yyyy-MM-dd HH:mm:ss")
}

function formatt(){
  return  new Date().Format("yyyy-MM-dd")
}



Date.prototype.Format = function (fmt) {//时间格式化
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "H+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}


function setCookie(name, value, iDay)
{
  var oDate=new Date();

  oDate.setDate(oDate.getDate()+iDay);

  document.cookie=name+'='+encodeURIComponent(value)+';expires='+oDate;
}

function getCookie(name)
{
  var arr=document.cookie.split('; ');
  var i=0;
  for(i=0;i<arr.length;i++)
  {
    //arr2->['username', 'abc']
    var arr2=arr[i].split('=');

    if(arr2[0]==name)
    {
      var getC = decodeURIComponent(arr2[1]);
      return getC;
    }
  }
  return '';
}

function removeCookie(name)
{
  setCookie(name, '1', -1);
}

function clearCookie(){
  var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (var i = keys.length; i--;)
      document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString();
  }
}

// 同步
function ajax(url,param){
  var da;
  $.ajax({
    url: urlRequest + url,
    type: 'post',
    async: false,
    data: param,
    success(data) {
      da=data;
    }
  })
  return da;
}

// 异步
function ajax2(url,param,g){
  $.ajax({
    url: urlRequest + url,
    type: 'post',
    async: true,//异步
    data: param,
    success(data) {
      da=data;
      g.call(this,da);
    }
  })
}

//lfy 改的，为了使模态框能在ajax请求之前加载出来
//rent-sure的三个按钮都改成这个ajax发出请求
function ajax3(url,param,g){
  var da;
  $.ajax({
    url: urlRequest + url,
    type: 'post',
    headers: {Authorization: document.getElementById('token').innerHTML},
    //异步
    async: true,
    data: param,
    beforeSend: function(){
      //开启模态框
      $('#MyModal').modal({backdrop: 'static', keyboard: false});
      // $('input[type=button]').attr("disabled","disabled");
      //禁用按钮
      $(".btn").attr("disabled","disabled");
      //禁用模态框的关闭按钮
      $("#closeBtn").attr("disabled","disabled");
    },
    complete: function(){
      //loading 隐藏
      $('#MyModal').modal('hide');
      $(".btn").removeAttr("disabled");
      $("#closeBtn").removeAttr("disabled");
    },

    success(data) {
      da=data;
      try{
      g.call(this,da);
      }catch (e) {alert("操作失败") }
    }
  })
  return da;
}


function ajax4(url,param,g){
  var da;
  $.ajax({
    url: urlRequest + url,
    type: 'post',
    headers: {Authorization: document.getElementById('token').innerHTML},
    //异步
    async: true,
    data: param,
    beforeSend: function(){
      //开启模态框
        $('#MyModal').modal({backdrop: 'static', keyboard: false});
      //禁用按钮
      $(".btn").attr("disabled","disabled");
      //禁用模态框的关闭按钮
      $("#closeBtn").attr("disabled","disabled");
    },
    complete: function(){
      //loading 隐藏
      $('#MyModal').modal('hide');
      $(".btn").removeAttr("disabled");
      $("#closeBtn").removeAttr("disabled");
    },

    success(data) {
      da=data;
      try{
      g.call(this,da);
      }catch (e) {alert("操作失败") }
    }
  })
  return da;
}




function changethestyles(linkDom,value) {
  // console.log("valuevalue"+value)
  if (value == undefined||value == null|| value == ''){
    value = 2
  }
  // console.log("valuevalue12321414124 =  "+value)
  if (!linkDom) {
    linkDom = document.createElement('link');
    linkDom.rel = 'stylesheet';
    linkDom.id = 'onlymytheme'
    // console.log(linkDom)
  }
  if (value == 0) {
    linkDom.href = './assets/stylesheets/style-selection/default.min.css';
  } else if (value == 1){
    linkDom.href = './assets/stylesheets/style-selection/dazzleDark.min.css';
  }else if (value == 2){
    linkDom.href = './assets/stylesheets/style-selection/lolite.min.css';
  } else {
    linkDom.href = './assets/stylesheets/style-selection/lolite.min.css';
  }
  console.log(linkDom)
  return linkDom
}

let  allrole;
function allrolef(x) {
  allrole=x
}




//echarts初始化
function echarts_init(id) {
  let theme = getCookie('theme');/*获取cookie中的当前主题编号*/
  let theme2 = echart_styles(theme);/*获取当前主题对应的echart主题名称*/
  var myChart = echarts.init(document.getElementById(id), {renderer: 'svg'});
  myChart.dispose();/*切换主题时用，不写可能不会切换主题*/
  myChart = echarts.init(document.getElementById(id), theme2, {renderer: 'svg'});
  return myChart
}


//echarts主题选择
function echart_styles(theme) {
  let theme2;
  if (theme == 1){
    theme2 = 'dark';
  }else if (theme == 2){
    theme2 = 'lolite';
  }else {
  }
  return theme2;
}

